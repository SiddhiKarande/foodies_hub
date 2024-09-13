"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZLogin = exports.ZUser = void 0;
// app/users/user.types.ts
const zod_1 = require("zod");
// Define the Zod schema for user validation
exports.ZUser = zod_1.z.object({
    userName: zod_1.z.string().min(3, 'User name must have at least 3 characters').max(50, 'User name must be less than 50 characters'),
    email: zod_1.z.string().email('Invalid email format'),
    avatar: zod_1.z.string().nullable().optional(),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters long').max(100, 'Password must be less than 100 characters'),
    salt: zod_1.z.string().optional(), // Add salt to the schema
    sessionToken: zod_1.z.string().optional(), // Add sessionToken to the schema
});
// Define the Zod schema for login validation
exports.ZLogin = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters long'),
});
