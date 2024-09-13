// app/users/user.schema.ts
import { model, Schema } from 'mongoose';
import { IUser } from './user.types';
import { BaseSchema } from '../utils/base-schema';

// Define the Mongoose Schema for User
const userSchema = new BaseSchema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: null },
    password: { type: String, required: true, select: false }, // select: false to exclude from queries by default
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  }
);

export const userModel = model<IUser>('User', userSchema);
