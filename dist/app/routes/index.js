"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const legalDoc_route_1 = require("../modules/legal-doc/legalDoc.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/legal-docs',
        route: legalDoc_route_1.LegalDocRoutes,
    },
];
moduleRoutes.forEach(module => router.use(module.path, module.route));
exports.applicationRoutes = router;
