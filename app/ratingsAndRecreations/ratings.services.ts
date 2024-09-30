import { Types } from 'mongoose';
import ratingsRepo from './ratings.repo';

const ratingsAndComments = async (userId: string, recipeId: string, options: { rating?: number, comment?: string, recreatedImage?: string }) => {
    try {
        // Ensure userId and recipeId are valid ObjectId
        if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(recipeId)) {
            throw new Error('Invalid userId or recipeId');
        }

        // If rating is provided
        if (options.rating) {
            if (options.rating < 1 || options.rating > 5) {
                throw new Error('Rating must be between 1 and 5');
            }
            return await ratingsRepo.rateRecipe(userId, recipeId, options.rating);
        }

        // If comment is provided
        if (options.comment) {
            return await ratingsRepo.commentOnRecipe(userId, recipeId, options.comment);
        }

        // If recreatedImage URL is provided
        if (options.recreatedImage) {
            return await ratingsRepo.uploadRecreatedImage(userId, recipeId, options.recreatedImage);
        }

        throw new Error('No valid operation provided (rating, comment, or recreatedImage)');
    } catch (error) {
        // Handle errors and return a proper response
        console.error('Error performing recipe operation:', error);
        throw error;
    }
};

export default {
    ratingsAndComments,
};
