import { Router } from "express";

import { postFlavour } from "../controllers/flavoursControllers.js";

import { flavourExists } from "../middlewares/flavourMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const flavoursRouter = Router();

flavoursRouter.post("/flavours", validateJoi("flavours"),flavourExists, postFlavour);

export default flavoursRouter;