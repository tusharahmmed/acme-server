"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagalDocService = exports.getAllDocs = void 0;
const elastic_serch_1 = require("../../../infra/elastic-search/elastic-serch");
const getAllDocs = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { q } = filters;
    const andConditons = [];
    if (q) {
        andConditons.push({
            multi_match: {
                query: q,
                fields: ['title^3', 'category^2', 'content^2', 'summary^2', 'tags^1.5'],
                fuzziness: 'AUTO',
                operator: 'or',
            },
        });
    }
    else {
        andConditons.push({
            match_all: {},
        });
    }
    const result = yield elastic_serch_1.elasticClient.search({
        index: "legal_docs" /* ELASTIC_INDEX.LEGAL_DOCS */,
        body: {
            query: {
                bool: {
                    must: andConditons,
                },
            },
            highlight: {
                fields: {
                    title: {},
                    summary: {},
                },
                pre_tags: ['<mark>'],
                post_tags: ['</mark>'],
            },
        },
        size: 50,
    });
    const matchFound = (_a = result === null || result === void 0 ? void 0 : result.hits) === null || _a === void 0 ? void 0 : _a.hits.map((item) => {
        return Object.assign(Object.assign({}, item === null || item === void 0 ? void 0 : item._source), { score: item === null || item === void 0 ? void 0 : item._score, heighlight: item === null || item === void 0 ? void 0 : item.highlight });
    });
    let total = 0;
    if (typeof ((_b = result === null || result === void 0 ? void 0 : result.hits) === null || _b === void 0 ? void 0 : _b.total) === 'number') {
        total = result.hits.total;
    }
    else {
        total = (_c = result.hits.total) === null || _c === void 0 ? void 0 : _c.value;
    }
    return {
        data: matchFound,
        meta: {
            total,
        },
    };
});
exports.getAllDocs = getAllDocs;
exports.LeagalDocService = {
    getAllDocs: exports.getAllDocs,
};
