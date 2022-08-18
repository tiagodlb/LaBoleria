import { Router } from "express";

import { postCakes } from "../controllers/cakesController.js";

import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const clientRouter = Router();

clientRouter.post("/clients", validateJoi("clients"), postCakes);

export default clientRouter;