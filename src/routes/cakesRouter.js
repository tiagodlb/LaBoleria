import { Router } from "express";

import { postCakes } from "../controllers/cakesController.js";

import { cakeExists, flavourExists } from "../middlewares/cakesMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateJoi("cakes"),cakeExists, flavourExists, postCakes);

export default cakesRouter; 