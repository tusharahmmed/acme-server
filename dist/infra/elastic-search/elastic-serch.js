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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize_elastic_search = exports.elasticClient = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const elasticsearch_1 = require("@elastic/elasticsearch");
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const db_1 = require("../../constant/db");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
exports.elasticClient = new elasticsearch_1.Client({
    node: config_1.default.elastic_node,
    auth: {
        apiKey: config_1.default.elastic_api_key,
    },
});
const initialize_elastic_search = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // chekc exist index
        const isIndexExist = yield exports.elasticClient.indices.exists({
            index: "legal_docs" /* ELASTIC_INDEX.LEGAL_DOCS */,
        });
        if (isIndexExist) {
            return;
        }
        // create index
        yield exports.elasticClient.indices.create({
            index: "legal_docs" /* ELASTIC_INDEX.LEGAL_DOCS */,
            body: {
                mappings: {
                    properties: {
                        id: { type: 'keyword' },
                        title: {
                            type: 'text',
                            fields: {
                                keyword: { type: 'keyword' },
                            },
                        },
                        category: { type: 'keyword' },
                        content: { type: 'text' },
                        summary: { type: 'text' },
                        jurisdiction: { type: 'keyword' },
                        year: { type: 'integer' },
                        tags: { type: 'keyword' },
                    },
                },
            },
        });
        // feed data
        const operations = [];
        for (const item of db_1.mockLegalDocs) {
            operations.push({
                index: { _index: "legal_docs" /* ELASTIC_INDEX.LEGAL_DOCS */, _id: item.id },
            });
            operations.push(item);
        }
        yield exports.elasticClient.bulk({
            refresh: true,
            operations,
        });
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Elastic search initialization error');
    }
});
exports.initialize_elastic_search = initialize_elastic_search;
