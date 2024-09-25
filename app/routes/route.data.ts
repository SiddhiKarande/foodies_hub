import { match } from "path-to-regexp";

import { ExcludedRoutes, Route } from "./route.types";
import authRoutes from "../auth/auth.routes";
import recepieRoutes from "../recipes/recipe.routes";

export const routes: Route[] = [
	authRoutes, recepieRoutes, 
];

export const excludedRoutes: ExcludedRoutes = [
	{ path: match("/api/auth/signUp"), method: "POST" },
	{ path: match("/api/auth/login"), method: "POST" },

];
