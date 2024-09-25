// app/recipes/recipe.schema.ts
import { model, Schema, Document, Types } from 'mongoose';
import { IRecipe } from './recipe.types';
import { UpdateQuery } from 'mongoose';

// Define the Mongoose Schema for Recipe
const recipeSchema = new Schema<IRecipe>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    image: { type: String, default: null },
    video: { type: String, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ratings: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number, min: 1, max: 5 },
      },
    ],
    comments: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    recreatedImages: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        image: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);


export const recipeModel = model<IRecipe>('Recipe', recipeSchema);


