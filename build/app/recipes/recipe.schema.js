"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeModel = void 0;
// app/recipes/recipe.schema.ts
const mongoose_1 = require("mongoose");
// Define the Mongoose Schema for Recipe
const recipeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    image: { type: String, default: null },
    video: { type: String, default: null },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    ratings: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, min: 1, max: 5 },
        },
    ],
    comments: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
            comment: { type: String },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    recreatedImages: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
            image: { type: String },
            createdAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });
exports.recipeModel = (0, mongoose_1.model)('Recipe', recipeSchema);
