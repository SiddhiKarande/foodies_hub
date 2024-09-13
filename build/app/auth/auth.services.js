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
exports.login = exports.signUp = void 0;
// app/auth/auth.services.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_services_1 = __importDefault(require("../users/user.services"));
const user_types_1 = require("../users/user.types");
const auth_responses_1 = require("./auth.responses");
// Sign up service function
const signUp = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate incoming data using Zod schema
        const parsed = user_types_1.ZUser.safeParse(userData);
        if (!parsed.success) {
            throw auth_responses_1.authResponses.UNAUTHORIZED;
        }
        const { userName, email, avatar, password } = parsed.data;
        // Check if the user already exists
        const existingUser = yield user_services_1.default.getUserByEmail(email);
        if (existingUser) {
            throw auth_responses_1.authResponses.USER_EXIST;
        }
        // Hash the password using bcrypt
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = {
            userName,
            email,
            avatar,
            password: hashedPassword,
            salt,
            sessionToken: '',
        };
        // Insert the user into the database
        const createdUser = yield user_services_1.default.createUser(newUser);
        return createdUser;
    }
    catch (error) {
        throw error;
    }
});
exports.signUp = signUp;
// Login service function
const login = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsed = user_types_1.ZLogin.safeParse(loginData);
        if (!parsed.success) {
            throw auth_responses_1.authResponses.UNAUTHORIZED;
        }
        const { email, password } = parsed.data;
        const existingUser = yield user_services_1.default.getUserByEmail(email);
        if (!existingUser || !existingUser.password) {
            throw auth_responses_1.authResponses.UNAUTHORIZED;
        }
        // Compare provided password with stored hashed password
        const passwordMatch = yield bcrypt_1.default.compare(password, existingUser.password);
        if (!passwordMatch) {
            throw auth_responses_1.authResponses.UNAUTHORIZED;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: existingUser._id, email: existingUser.email, userName: existingUser.userName }, process.env.JWT_SECRET, // Ensure JWT_SECRET is set in environment variables
        { expiresIn: '1h' });
        // Return token and user details
        return {
            token,
            user: {
                userName: existingUser.userName,
                email: existingUser.email,
                avatar: existingUser.avatar,
            },
        };
    }
    catch (error) {
        throw error;
    }
});
exports.login = login;
exports.default = {
    signUp: exports.signUp,
    login: exports.login,
};
