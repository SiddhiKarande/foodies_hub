"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        if (!path.startsWith("/")) {
            throw new Error("INVALID PATH");
        }
        if (Route.registeredRoutes.find((route) => route.path === this.path)) {
            throw new Error(`PATH: ${this.path} ALREADY EXISTS`);
        }
        Route.registeredRoutes.push(this);
    }
}
exports.Route = Route;
Route.registeredRoutes = [];
