"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZRecipe = void 0;
// app/recipes/recipe.types.ts
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
// Define Zod validation schema for a Recipe
exports.ZRecipe = zod_1.z.object({
    title: zod_1.z.string().min(3, 'Title must have at least 3 characters'),
    description: zod_1.z.string().min(10, 'Description must have at least 10 characters'),
    ingredients: zod_1.z.array(zod_1.z.string()).min(1, 'At least one ingredient is required'),
    instructions: zod_1.z.string().min(10, 'Instructions must have at least 10 characters'),
    ingredientsCount: zod_1.z.number().default(0),
    image: zod_1.z.string().url().nullable().optional(),
    video: zod_1.z.string().url().nullable().optional(),
    createdBy: zod_1.z.instanceof(mongoose_1.Types.ObjectId), // Ensure createdBy is an ObjectId
    ratings: zod_1.z
        .array(zod_1.z.object({
        user: zod_1.z.instanceof(mongoose_1.Types.ObjectId),
        rating: zod_1.z.number().min(1).max(5),
    }))
        .optional(),
    comments: zod_1.z
        .array(zod_1.z.object({
        user: zod_1.z.instanceof(mongoose_1.Types.ObjectId),
        comment: zod_1.z.string(),
        createdAt: zod_1.z.date().default(new Date()),
    }))
        .optional(),
    recreatedImages: zod_1.z
        .array(zod_1.z.object({
        user: zod_1.z.instanceof(mongoose_1.Types.ObjectId),
        image: zod_1.z.string(),
        createdAt: zod_1.z.date().default(new Date()),
    }))
        .optional(),
});
