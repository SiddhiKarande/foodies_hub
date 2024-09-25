import { Types } from "mongoose";
import userServices from "../users/user.services";
import recipeRepo from "./recipe.repo";
import { IRecipe } from "./recipe.types";


const createRecepie = async (userId: string, recipeData: Partial<IRecipe>) => {
  try {
    return await recipeRepo.createRecipe({ ...recipeData, createdBy: new Types.ObjectId(userId) });
  } catch (error) {
    throw error;
  }
}

const getAllRecepies = async () => {
  try {
    const recepies = await recipeRepo.getAllRecepies();
    return recepies;
  } catch (error) {
    
  }
}

export default{
  createRecepie,
  getAllRecepies,
}