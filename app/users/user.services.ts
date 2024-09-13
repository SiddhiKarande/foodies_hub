// app/users/user.services.ts
import userRepo from './user.repo';
import { userResponses } from './user.responses';

// Fetch a user by email
export const getUserByEmail = async (email: string) => {
  try {
    return await userRepo.getUserByEmail(email);
  } catch (error) {
    throw userResponses.NOT_FOUND;
  }
};

// Fetch a user by session token
export const getUserBySessionToken = async (sessionToken: string) => {
  try {
    return await userRepo.getUserBySessionToken(sessionToken);
  } catch (error) {
    throw userResponses.NOT_FOUND;  
  }
};

// Fetch a user by ID
export const getUserById = async (id: string) => {
  try {
    return await userRepo.getUserById(id);
  } catch (error) {
    throw userResponses.NOT_FOUND;
  }
};

// Create a new user
export const createUser = async (userData: Record<string, any>) => {
  try {
    return await userRepo.createUser(userData);
  } catch (error) {
    throw userResponses.SERVER_ERR;
  }
};

export default {
  getUserByEmail,
  getUserBySessionToken,
  getUserById,
  createUser,
};
