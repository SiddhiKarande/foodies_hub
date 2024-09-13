"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_types_1 = require("../routes/route.types");
const router = (0, express_1.Router)();
exports.default = new route_types_1.Route("/api/user", router);
