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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = void 0;
// app/users/user.repo.ts
const user_schema_1 = require("./user.schema");
// Repository function to get all users
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.userModel.find(); });
exports.getUsers = getUsers;
// Repository function to get user by email
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.userModel.findOne({ email }).select('+password'); });
exports.getUserByEmail = getUserByEmail;
// Repository function to get user by session token
const getUserBySessionToken = (sessionToken) => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.userModel.findOne({ sessionToken }); });
exports.getUserBySessionToken = getUserBySessionToken;
// Repository function to get user by ID
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.userModel.findById(id); });
exports.getUserById = getUserById;
// Repository function to create a new user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.userModel.create(userData); });
exports.createUser = createUser;
exports.default = {
    getUsers: exports.getUsers,
    getUserByEmail: exports.getUserByEmail,
    getUserBySessionToken: exports.getUserBySessionToken,
    getUserById: exports.getUserById,
    createUser: exports.createUser,
};
