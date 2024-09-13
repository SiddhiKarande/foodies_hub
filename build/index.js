"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vaildate_env_1 = require("./app/utils/vaildate-env");
const app_1 = require("./app/app");
(0, vaildate_env_1.validateENV)();
(0, app_1.startServer)();
