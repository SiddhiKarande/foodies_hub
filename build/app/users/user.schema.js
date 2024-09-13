"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
// app/users/user.schema.ts
const mongoose_1 = require("mongoose");
// Define the Mongoose Schema for User
const userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: null },
    password: { type: String, required: true, select: false }, // select: false to exclude from queries by default
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
}, { timestamps: true });
exports.userModel = (0, mongoose_1.model)('User', userSchema);
