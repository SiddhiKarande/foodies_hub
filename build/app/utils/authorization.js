"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = exports.validateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const validateToken = (excludedRoutes) => (req, res, next) => {
    var _a;
    try {
        if (excludedRoutes.find((route) => route.path(req.url) && route.method === req.method))
            return next();
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token)
            throw "FORBIDDEN";
        const { JWT_SECRET } = process.env;
        const payload = (0, jsonwebtoken_1.verify)(token, JWT_SECRET || "");
        req.currUser = payload;
        next();
    }
    catch (e) {
        console.log("error in validate token");
        next({ statusCode: 403, message: "FORBIDDEN", err: e });
    }
};
exports.validateToken = validateToken;
const permit = (roles) => (req, res, next) => {
    if (!roles.includes(req.currUser.role))
        throw `NOT AUTHORIZED TO ACCESS THIS`;
    next();
};
exports.permit = permit;
