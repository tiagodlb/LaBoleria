import { OrdersRepository } from "../repositories/ordersRepository.js";

export async function postOrder(req, res) {
    let { clientId, cakeId, quantity, totalPrice } = req.body;

    try {
        await OrdersRepository.postOrder(clientId, cakeId, quantity, totalPrice);
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function getOrders(req, res) {
    const date = req.query.date
    console.log(date)
    try {
        if(date === undefined){
            const orders = await OrdersRepository.getOrdersByDate(date);
            return res.send(orders.rows).status(200);
        }
        else{
            const orders = await OrdersRepository.getOrders();
            return res.send(orders.rows).status(200);
        }
    } catch (error) {
        return res.sendStatus(500);
    }
}