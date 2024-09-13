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
// app/auth/auth.routes.ts
const express_1 = require("express");
const auth_services_1 = __importDefault(require("./auth.services"));
const response_handler_1 = require("../utils/response-handler"); // Custom response handler
const route_types_1 = require("../routes/route.types");
const router = (0, express_1.Router)();
// Sign up route
router.post('/signup', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield auth_services_1.default.signUp(req.body);
        res.send(new response_handler_1.ResponseHandler(newUser));
    }
    catch (error) {
        next(error);
    }
}));
// Login route
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_services_1.default.login(req.body);
        res.send(new response_handler_1.ResponseHandler(user));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = new route_types_1.Route("/api/auth", router);
