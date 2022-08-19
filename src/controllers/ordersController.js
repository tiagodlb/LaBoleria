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
    try {
        if (date === undefined) {
            const orders = await OrdersRepository.getOrders();
            const data = orders.rows.map((order) => ({
                "client": {
                    id: order.clientId,
                    name: order.clientName,
                    address: order.clientAddress,
                    phone: order.clientPhone

                },
                "cake": {
                    "id": order.cakeId,
                    "name": order.cakeName,
                    "price": order.cakePrice,
                    "description": order.cakeDescription,
                    "image": order.cakeImage,

                },
                "orderId": order.orderId,
                createdAt: (order.createdAt).toLocaleDateString("en-CA"),
                quantity: order.quantity,
                totalPrice: order.totalPrice
            }))
            return res.send(data).status(200);
        }
        else {
            const orders = await OrdersRepository.getOrdersByDate(date);
            const data = orders.rows.map((order) => ({
                "client": {
                    id: order.clientId,
                    name: order.clientName,
                    address: order.clientAddress,
                    phone: order.clientPhone

                },
                "cake": {
                    "id": order.cakeId,
                    "name": order.cakeName,
                    "price": order.cakePrice,
                    "description": order.cakeDescription,
                    "image": order.cakeImage,

                },
                "orderId": order.orderId,
                createdAt: (order.createdAt).toLocaleDateString("en-CA"),
                quantity: order.quantity,
                totalPrice: order.totalPrice
            }))
            return res.send(data).status(200);
        }
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function getOrdersById(req, res) {
    const { id } = req.params
    try {
        const order = await OrdersRepository.getOrdersById(id);
        const data = order.rows.map((order) => ({
            "client": {
                id: order.clientId,
                name: order.clientName,
                address: order.clientAddress,
                phone: order.clientPhone

            },
            "cake": {
                "id": order.cakeId,
                "name": order.cakeName,
                "price": order.cakePrice,
                "description": order.cakeDescription,
                "image": order.cakeImage,

            },
            "orderId": order.orderId,
            createdAt: (order.createdAt).toLocaleDateString("en-CA"),
            quantity: order.quantity,
            totalPrice: order.totalPrice
        }))
        return res.send(data).status(200);
    } catch (error) {
        return res.sendStatus(500);
    }
}