// app/recipes/recipe.routes.ts
import { Router } from 'express';
import { Route } from '../routes/route.types';
import recipeServices from './recipe.services';
import { ResponseHandler } from '../utils/response-handler';


const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const userId = req.currUser.userId;
    console.log(userId);
    const newRecipe = await recipeServices.createRecepie(userId, req.body);
    res.send(new ResponseHandler(newRecipe));
  }
  catch (error) {
    next(error);
  }
})

router.get('/', async (req, res, next) => {
  try {
    const recepies = await recipeServices.getAllRecepies();
    res.send(new ResponseHandler(recepies));
  } catch (error) {
    
  }
})
export default new Route("/api/recipe", router);

