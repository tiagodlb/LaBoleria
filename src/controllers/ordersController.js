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
                    "price": parseFloat(order.cakePrice).toFixed(2),
                    "description": order.cakeDescription,
                    "image": order.cakeImage,
                    "flavourName": order.flavourName

                },
                "orderId": order.orderId,
                createdAt: (order.createdAt).toLocaleDateString("en-CA"),
                quantity: order.quantity,
                totalPrice: parseFloat(parseInt(order.totalPrice)).toFixed(2),
                isDelivered: order.isDelivered
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
                    "price": parseFloat(order.cakePrice).toFixed(2),
                    "description": order.cakeDescription,
                    "image": order.cakeImage,
                    "flavourName": order.flavourName

                },
                "orderId": order.orderId,
                createdAt: (order.createdAt).toLocaleDateString("en-CA"),
                quantity: order.quantity,
                totalPrice: parseFloat(parseInt(order.totalPrice)).toFixed(2),
                isDelivered: order.isDelivered
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
                "price": parseFloat(order.cakePrice).toFixed(2),
                "description": order.cakeDescription,
                "image": order.cakeImage,
                "flavourName": order.flavourName

            },
            "orderId": order.orderId,
            createdAt: (order.createdAt).toLocaleDateString("en-CA"),
            quantity: order.quantity,
            totalPrice: parseFloat(parseInt(order.totalPrice)).toFixed(2),
            isDelivered: order.isDelivered
        }))
        return res.send(data).status(200);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function patchOrder(req, res) {
    const { id } = req.params
    try {
        await OrdersRepository.patchOrder(id);
        return res.sendStatus(204)
    } catch (error) {
        return res.sendStatus(500);
    }
}