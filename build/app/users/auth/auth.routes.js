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
const express_1 = require("express");
const auth_services_1 = __importDefault(require("./auth.services"));
const auth_responses_1 = require("./auth.responses");
const router = (0, express_1.Router)();
router.post('/signUp', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield auth_services_1.default.signUp(req.body);
        return auth_responses_1.authResponses.SIGNED_UP;
    }
    catch (error) {
        throw error;
    }
}));
exports.default = router;
