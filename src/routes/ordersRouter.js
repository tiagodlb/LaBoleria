import { Router } from "express";

import { postOrder, getOrders, getOrdersById, patchOrder } from "../controllers/ordersController.js";

import { clientExists, cakeExists, ordersExists, orderExists } from "../middlewares/ordersMiddleware.js";
import { validateJoi } from "../middlewares/joiValidationMiddleware.js";

const orderRouter = Router();

orderRouter.post("/order", validateJoi("orders"), clientExists, cakeExists, postOrder);
orderRouter.get("/orders", ordersExists, getOrders);
orderRouter.get("/orders/:id", orderExists, getOrdersById )
orderRouter.patch("/order/:id", orderExists, patchOrder)
export default orderRouter;