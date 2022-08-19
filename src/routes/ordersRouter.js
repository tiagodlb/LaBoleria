import { Router } from "express";

import { postOrder, getOrders, getOrdersById } from "../controllers/ordersController.js";

import { clientExists, cakeExists, ordersExists, orderExists } from "../middlewares/ordersMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const orderRouter = Router();

orderRouter.post("/order", validateJoi("orders"), clientExists, cakeExists, postOrder);
orderRouter.get("/order", ordersExists, getOrders);
orderRouter.get("/order/:id", orderExists, getOrdersById )
export default orderRouter;