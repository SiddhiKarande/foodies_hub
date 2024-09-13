"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedRoutes = exports.routes = void 0;
const path_to_regexp_1 = require("path-to-regexp");
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
exports.routes = [
    auth_routes_1.default,
];
exports.excludedRoutes = [
    { path: (0, path_to_regexp_1.match)("/api/auth/signUp"), method: "POST" },
    { path: (0, path_to_regexp_1.match)("/api/auth/login"), method: "POST" },
];
