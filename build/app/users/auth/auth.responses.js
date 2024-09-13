"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResponses = void 0;
exports.authResponses = {
    LOGIN_FAILED: {
        statusCode: 401,
        message: "AUTH: LOGIN FAILED",
    },
    NOT_FOUND: {
        statusCode: 404,
        message: "AUTH: USER NOT FOUND",
    },
    SIGNED_UP: {
        statusCode: 200,
        message: "AUTH: SIGN UP SUCCESSFUL",
    },
    UNAUTHORIZED: {
        statusCode: 401,
        message: "AUTH: UNAUTHORIZED",
    },
    SERVER_ERR: {
        statusCode: 500,
        message: "AUTH: SERVER ERR",
    },
};
