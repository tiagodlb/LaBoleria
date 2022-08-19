import { Router } from "express";

import { postClients } from "../controllers/clientsController.js";

import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const clientRouter = Router();

clientRouter.post("/clients", validateJoi("clients"), postClients);

export default clientRouter;