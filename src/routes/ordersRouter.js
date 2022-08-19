import { Router } from "express";

import { postOrder } from "../controllers/ordersController.js";

import { clientExists, cakeExists } from "../middlewares/ordersMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const orderRouter = Router();

orderRouter.post("/order", validateJoi("orders"), clientExists, cakeExists, postOrder);

export default orderRouter;