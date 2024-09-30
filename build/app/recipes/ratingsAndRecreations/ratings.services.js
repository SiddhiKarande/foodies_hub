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
const ratings_repo_1 = __importDefault(require("./ratings.repo"));
const ratingsAndComments = (userId, recipeId, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensure userId and recipeId are valid ObjectId
        if (!mongoose_1.Types.ObjectId.isValid(userId) || !mongoose_1.Types.ObjectId.isValid(recipeId)) {
            throw new Error('Invalid userId or recipeId');
        }
        // If rating is provided
        if (options.rating) {
            if (options.rating < 1 || options.rating > 5) {
                throw new Error('Rating must be between 1 and 5');
            }
            return yield ratings_repo_1.default.rateRecipe(userId, recipeId, options.rating);
        }
        // If comment is provided
        if (options.comment) {
            return yield ratings_repo_1.default.commentOnRecipe(userId, recipeId, options.comment);
        }
        // If recreatedImage URL is provided
        if (options.recreatedImage) {
            return yield ratings_repo_1.default.uploadRecreatedImage(userId, recipeId, options.recreatedImage);
        }
        throw new Error('No valid operation provided (rating, comment, or recreatedImage)');
    }
    catch (error) {
        // Handle errors and return a proper response
        console.error('Error performing recipe operation:', error);
        throw error;
    }
});
exports.default = {
    ratingsAndComments,
};
