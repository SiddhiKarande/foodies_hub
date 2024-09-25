import { recipeModel } from "./recipe.schema";
import { IRecipe } from "./recipe.types";

const createRecipe = async (recipeData: Partial<IRecipe>) => await recipeModel.create(recipeData);

const getAllRecepies = async () => await recipeModel.find().populate('createdBy', 'username email');
export default{
  createRecipe,
  getAllRecepies,
}