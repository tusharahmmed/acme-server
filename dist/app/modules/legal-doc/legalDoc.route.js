"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalDocRoutes = void 0;
const express_1 = require("express");
const legalDoc_controller_1 = require("./legalDoc.controller");
const router = (0, express_1.Router)();
router.get('/', legalDoc_controller_1.LegalDocController.getAllDocs);
exports.LegalDocRoutes = router;
