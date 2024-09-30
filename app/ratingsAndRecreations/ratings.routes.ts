import { Router, Request, Response } from 'express';
import ratingsServices from './ratings.services';
import { ResponseHandler } from '../utils/response-handler';
import { Route } from '../routes/route.types';

const router = Router();

// Route to handle rating, commenting, or uploading recreated image
router.patch('/:recipeId/reviews', async (req, res, next) => {
    try {
        const userId = req.currUser.userId;
        const { recipeId } = req.params;
        const { rating, comment, recreatedImage } = req.body;

        // Ensure the userId is provided in the request body
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Validate the inputs
        if (!rating && !comment && !recreatedImage) {
            return res.status(400).json({ error: 'You must provide either a rating, comment, or recreated image' });
        }

        // Call the service function
        const result = await ratingsServices.ratingsAndComments(userId, recipeId, {
            rating,
            comment,
            recreatedImage
        });

        return res.send(new ResponseHandler(result)); // Return the updated recipe
    } catch (error) {
        throw next;
    }
});

export default new Route("/api/rating", router);
