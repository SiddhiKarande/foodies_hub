"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const route_data_1 = require("./route.data");
const authorization_1 = require("../utils/authorization");
const response_handler_1 = require("../utils/response-handler");
const registerMiddlewares = (app) => {
    const corsOptions = {
        origin: "*",
    };
    app.use((0, cors_1.default)(corsOptions));
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, authorization_1.validateToken)(route_data_1.excludedRoutes));
    for (let route of route_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerMiddlewares = registerMiddlewares;
