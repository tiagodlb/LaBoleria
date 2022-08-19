import { OrdersRepository } from "../repositories/ordersRepository.js";

export async function cakeExists(req, res, next) {
    const { cakeId } = req.body
    try {
        const cake = await OrdersRepository.cakeExists(cakeId);
        if (cake.rowCount === 0) return res.sendStatus(404);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function clientExists(req, res, next) {
    const { clientId } = req.body
    try {
        const client = await OrdersRepository.clientExists(clientId);
        if (client.rowCount === 0) return res.sendStatus(404);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function ordersExists(req, res, next) {
    const date = req.query.date
    try {
        if (date === undefined) {

            const orders = await OrdersRepository.getOrders()
            if (orders.rowCount === 0) return res.sendStatus(404)

            return next();
        }
        else {
            const orders = await OrdersRepository.getOrdersByDate(date)
            if (orders.rowCount === 0) return res.sendStatus(404)

            return next();
        }
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function orderExists(req,res,next){
    const { id } = req.params
    try {
        const order = await OrdersRepository.orderExists(id);
        if (order.rowCount === 0) return res.sendStatus(404);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}