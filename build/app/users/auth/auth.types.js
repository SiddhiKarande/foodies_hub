"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZAuthentication = void 0;
const zod_1 = require("zod");
exports.ZAuthentication = zod_1.z.object({
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .max(100, "Password must be less than 100 characters."),
    //more constraints
    salt: zod_1.z.string().nonempty("Salt is required."),
    sessionToken: zod_1.z.string().nonempty("Session token is required."),
});
