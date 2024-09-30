import { recipeModel } from "../recipes/recipe.schema";

// Function to rate a recipe
const rateRecipe = async (userId: string, recipeId: string, rating: number) => {
    return await recipeModel.findOneAndUpdate(
        { _id: recipeId },
        { 
            $push: { 
                ratings: { user: userId, rating }  // Add user and rating to the ratings array
            } 
        },
        { new: true, upsert: false } 
    );
};

// Function to comment on a recipe
const commentOnRecipe = async (userId: string, recipeId: string, comment: string) => {
    return await recipeModel.findOneAndUpdate(
        { _id: recipeId },
        { 
            $push: { 
                comments: { user: userId, comment, createdAt: new Date() }  // Add user and comment to the comments array
            } 
        },
        { new: true, upsert: false } 
    );
};

// Function to upload recreated images for a recipe
const uploadRecreatedImage = async (userId: string, recipeId: string, imageUrl: string) => {
    return await recipeModel.findOneAndUpdate(
        { _id: recipeId },
        { 
            $push: { 
                recreatedImages: { user: userId, image: imageUrl, createdAt: new Date() }  // Add user and image to the recreatedImages array
            } 
        },
        { new: true, upsert: false } 
    );
};

export default {
    rateRecipe,
    commentOnRecipe,
    uploadRecreatedImage
};
