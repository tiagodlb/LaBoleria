import { Router } from "express";

import { postOrder, getOrders } from "../controllers/ordersController.js";

import { clientExists, cakeExists, ordersExists } from "../middlewares/ordersMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const orderRouter = Router();

orderRouter.post("/order", validateJoi("orders"), clientExists, cakeExists, postOrder);
orderRouter.get("/order", ordersExists, getOrders);

export default orderRouter;