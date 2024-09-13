"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const user_repo_1 = __importDefault(require("../user.repo"));
const user_types_1 = require("../user.types");
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_responses_1 = require("./auth.responses");
const signUp = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate incoming data using Zod schema from users.validation.ts
        const parsed = user_types_1.ZUser.safeParse(userData);
        if (!parsed.success) {
            throw auth_responses_1.authResponses.UNAUTHORIZED;
        }
        const { userName, email, avatar, authentication } = parsed.data;
        const { password } = authentication;
        // Check if the user already exists
        const existingUser = yield user_repo_1.default.getUserByEmail(email);
        if (existingUser) {
            throw new Error('User with this email already exists.');
        }
        // Hash the password using bcrypt
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = {
            userName,
            email,
            avatar,
            authentication: {
                password: hashedPassword,
                salt,
                sessionToken: '',
            },
        };
        // Insert the user into the database using the repository function
        const createdUser = yield user_repo_1.default.createUser(newUser);
        // Convert the Mongoose document to a plain JavaScript object
        return createdUser.toObject();
    }
    catch (error) {
        // Handle errors appropriately
        throw new Error;
    }
});
exports.signUp = signUp;
exports.default = {
    signUp: exports.signUp,
};
