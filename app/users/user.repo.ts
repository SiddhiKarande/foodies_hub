// app/users/user.repo.ts
import { userModel } from './user.schema';
import { IUser } from './user.types';

// Repository function to get all users
export const getUsers = async () => await userModel.find();

// Repository function to get user by email
export const getUserByEmail = async (email: string) => await userModel.findOne({ email }).select('+password');

// Repository function to get user by session token
export const getUserBySessionToken = async (sessionToken: string) => await userModel.findOne({ sessionToken });

// Repository function to get user by ID
export const getUserById = async (id: string) => await userModel.findById(id);

// Repository function to create a new user
export const createUser = async (userData: Partial<IUser>) => await userModel.create(userData);

export default {
  getUsers,
  getUserByEmail,
  getUserBySessionToken,
  getUserById,
  createUser,
};
