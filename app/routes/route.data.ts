import { match } from "path-to-regexp";

import { ExcludedRoutes, Route } from "./route.types";
import authRoutes from "../auth/auth.routes";
import recepieRoutes from "../recipes/recipe.routes";
import ratingsRoutes from "../ratingsAndRecreations/ratings.routes";

export const routes: Route[] = [
	authRoutes, recepieRoutes, ratingsRoutes,
];

export const excludedRoutes: ExcludedRoutes = [
	{ path: match("/api/auth/signUp"), method: "POST" },
	{ path: match("/api/auth/login"), method: "POST" },

];
