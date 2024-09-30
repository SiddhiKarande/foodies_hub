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
const recipe_schema_1 = require("../recipe.schema");
// Function to rate a recipe
const rateRecipe = (userId, recipeId, rating) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipe_schema_1.recipeModel.findOneAndUpdate({ _id: recipeId }, {
        $push: {
            ratings: { user: userId, rating } // Add user and rating to the ratings array
        }
    }, { new: true, upsert: false });
});
// Function to comment on a recipe
const commentOnRecipe = (userId, recipeId, comment) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipe_schema_1.recipeModel.findOneAndUpdate({ _id: recipeId }, {
        $push: {
            comments: { user: userId, comment, createdAt: new Date() } // Add user and comment to the comments array
        }
    }, { new: true, upsert: false });
});
// Function to upload recreated images for a recipe
const uploadRecreatedImage = (userId, recipeId, imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    return yield recipe_schema_1.recipeModel.findOneAndUpdate({ _id: recipeId }, {
        $push: {
            recreatedImages: { user: userId, image: imageUrl, createdAt: new Date() } // Add user and image to the recreatedImages array
        }
    }, { new: true, upsert: false });
});
exports.default = {
    rateRecipe,
    commentOnRecipe,
    uploadRecreatedImage
};
