// app/users/user.types.ts
import { z } from 'zod';

// Define the Zod schema for user validation
export const ZUser = z.object({
  userName: z.string().min(3, 'User name must have at least 3 characters').max(50, 'User name must be less than 50 characters'),
  email: z.string().email('Invalid email format'),
  avatar: z.string().nullable().optional(),
  password: z.string().min(8, 'Password must be at least 8 characters long').max(100, 'Password must be less than 100 characters'),
  salt: z.string().optional(), // Add salt to the schema
  sessionToken: z.string().optional(), // Add sessionToken to the schema
});

// Define the Zod schema for login validation
export const ZLogin = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export interface IUser extends z.infer<typeof ZUser> {}
