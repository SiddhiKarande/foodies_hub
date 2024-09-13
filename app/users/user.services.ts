// app/users/user.services.ts
import userRepo from './user.repo';

// Fetch a user by email
export const getUserByEmail = async (email: string) => {
  return await userRepo.getUserByEmail(email);
};

// Fetch a user by session token
export const getUserBySessionToken = async (sessionToken: string) => {
  return await userRepo.getUserBySessionToken(sessionToken);
};

// Fetch a user by ID
export const getUserById = async (id: string) => {
  return await userRepo.getUserById(id);
};

// Create a new user
export const createUser = async (userData: Record<string, any>) => {
  return await userRepo.createUser(userData);
};

export default {
  getUserByEmail,
  getUserBySessionToken,
  getUserById,
  createUser,
};
