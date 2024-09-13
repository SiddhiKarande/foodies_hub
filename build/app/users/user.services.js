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
exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = void 0;
// app/users/user.services.ts
const user_repo_1 = __importDefault(require("./user.repo"));
const user_responses_1 = require("./user.responses");
// Fetch a user by email
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getUserByEmail(email);
    }
    catch (error) {
        throw user_responses_1.userResponses.NOT_FOUND;
    }
});
exports.getUserByEmail = getUserByEmail;
// Fetch a user by session token
const getUserBySessionToken = (sessionToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getUserBySessionToken(sessionToken);
    }
    catch (error) {
        throw user_responses_1.userResponses.NOT_FOUND;
    }
});
exports.getUserBySessionToken = getUserBySessionToken;
// Fetch a user by ID
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getUserById(id);
    }
    catch (error) {
        throw user_responses_1.userResponses.NOT_FOUND;
    }
});
exports.getUserById = getUserById;
// Create a new user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.createUser(userData);
    }
    catch (error) {
        throw user_responses_1.userResponses.SERVER_ERR;
    }
});
exports.createUser = createUser;
exports.default = {
    getUserByEmail: exports.getUserByEmail,
    getUserBySessionToken: exports.getUserBySessionToken,
    getUserById: exports.getUserById,
    createUser: exports.createUser,
};
