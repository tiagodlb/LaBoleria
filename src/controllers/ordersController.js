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