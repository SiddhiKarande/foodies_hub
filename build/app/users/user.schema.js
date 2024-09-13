"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
// app/users/user.schema.ts
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utils/base-schema");
// Define the Mongoose Schema for User
const userSchema = new base_schema_1.BaseSchema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: null },
    password: { type: String, required: true, select: false }, // select: false to exclude from queries by default
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
});
exports.userModel = (0, mongoose_1.model)('User', userSchema);
