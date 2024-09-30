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
const express_1 = require("express");
const ratings_services_1 = __importDefault(require("./ratings.services"));
const response_handler_1 = require("../../utils/response-handler");
const route_types_1 = require("../../routes/route.types");
const router = (0, express_1.Router)();
// Route to handle rating, commenting, or uploading recreated image
router.patch('/:recipeId/reviews', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield ratings_services_1.default.ratingsAndComments(userId, recipeId, {
            rating,
            comment,
            recreatedImage
        });
        return res.send(new response_handler_1.ResponseHandler(result)); // Return the updated recipe
    }
    catch (error) {
        throw next;
    }
}));
exports.default = new route_types_1.Route("/api/rating", router);
