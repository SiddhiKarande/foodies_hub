import { Router } from "express";
import { Route } from "../routes/route.types";

const router = Router();

export default new Route("/api/user", router);