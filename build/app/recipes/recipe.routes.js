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
// app/recipes/recipe.routes.ts
const express_1 = require("express");
const route_types_1 = require("../routes/route.types");
const recipe_services_1 = __importDefault(require("./recipe.services"));
const response_handler_1 = require("../utils/response-handler");
const router = (0, express_1.Router)();
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.currUser.userId;
        console.log(userId);
        const newRecipe = yield recipe_services_1.default.createRecepie(userId, req.body);
        res.send(new response_handler_1.ResponseHandler(newRecipe));
    }
    catch (error) {
        next(error);
    }
}));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recepies = yield recipe_services_1.default.getAllRecepies();
        res.send(new response_handler_1.ResponseHandler(recepies));
    }
    catch (error) {
    }
}));
exports.default = new route_types_1.Route("/api/recipe", router);
