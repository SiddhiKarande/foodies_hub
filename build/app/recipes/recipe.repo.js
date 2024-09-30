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
const recipe_schema_1 = require("./recipe.schema");
const createRecipe = (recipeData) => __awaiter(void 0, void 0, void 0, function* () { return yield recipe_schema_1.recipeModel.create(recipeData); });
const getAllRecepies = () => __awaiter(void 0, void 0, void 0, function* () { return yield recipe_schema_1.recipeModel.find().populate('createdBy', 'username email'); });
const getRecepieById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield recipe_schema_1.recipeModel.findById(id).populate('createdBy', 'username email'); });
exports.default = {
    createRecipe,
    getAllRecepies,
};
