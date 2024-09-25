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
const mongoose_1 = require("mongoose");
const recipe_repo_1 = __importDefault(require("./recipe.repo"));
const createRecepie = (userId, recipeData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield recipe_repo_1.default.createRecipe(Object.assign(Object.assign({}, recipeData), { createdBy: new mongoose_1.Types.ObjectId(userId) }));
    }
    catch (error) {
        throw error;
    }
});
const getAllRecepies = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recepies = yield recipe_repo_1.default.getAllRecepies();
        return recepies;
    }
    catch (error) {
    }
});
exports.default = {
    createRecepie,
    getAllRecepies,
};
