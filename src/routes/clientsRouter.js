import { Router } from "express";

import { postClients, getClientByOrder } from "../controllers/clientsController.js";

import { clientExists } from "../middlewares/clientsMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const clientRouter = Router();

clientRouter.post("/clients", validateJoi("clients"), postClients);
clientRouter.get("/clients/:id/orders", clientExists, getClientByOrder)

export default clientRouter;