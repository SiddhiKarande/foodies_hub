// app/recipes/recipe.types.ts
import { z } from 'zod';
import { Document, Types } from 'mongoose';

// Define Zod validation schema for a Recipe
export const ZRecipe = z.object({
  title: z.string().min(3, 'Title must have at least 3 characters'),
  description: z.string().min(10, 'Description must have at least 10 characters'),
  ingredients: z.array(z.string()).min(1, 'At least one ingredient is required'),
  instructions: z.string().min(10, 'Instructions must have at least 10 characters'),
  ingredientsCount: z.number().default(0),
  image: z.string().url().nullable().optional(),
  video: z.string().url().nullable().optional(),
  createdBy: z.instanceof(Types.ObjectId), // Ensure createdBy is an ObjectId
  ratings: z
    .array(
      z.object({
        user: z.instanceof(Types.ObjectId),
        rating: z.number().min(1).max(5),
      })
    )
    .optional(),
  comments: z
    .array(
      z.object({
        user: z.instanceof(Types.ObjectId),
        comment: z.string(),
        createdAt: z.date().default(new Date()),
      })
    )
    .optional(),
  recreatedImages: z
    .array(
      z.object({
        user: z.instanceof(Types.ObjectId),
        image: z.string(),
        createdAt: z.date().default(new Date()),
      })
    )
    .optional(),
});

// Define the TypeScript type for Recipe
export interface IRecipe extends Document, z.infer<typeof ZRecipe> {}
