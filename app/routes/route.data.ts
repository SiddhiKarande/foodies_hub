import { match } from "path-to-regexp";

import { ExcludedRoutes, Route } from "./route.types";
import userRouter from "../users/user.router";
import authRoutes from "../auth/auth.routes";

export const routes: Route[] = [
	authRoutes,
];

export const excludedRoutes: ExcludedRoutes = [
	{ path: match("/api/auth/signUp"), method: "POST" },
	{ path: match("/api/auth/login"), method: "POST" },
];
