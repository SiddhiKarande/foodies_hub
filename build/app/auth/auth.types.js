"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZLogin = exports.ZAuthentication = void 0;
const zod_1 = require("zod");
exports.ZAuthentication = zod_1.z.object({
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .max(100, "Password must be less than 100 characters."),
    //more constraints
    salt: zod_1.z.string(),
    sessionToken: zod_1.z.string(),
});
exports.ZLogin = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters long')
});
