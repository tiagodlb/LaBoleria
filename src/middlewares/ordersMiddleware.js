import { OrdersRepository } from "../repositories/ordersRepository.js"; 

export async function cakeExists(req, res, next) {
    const { cakeId } = req.body
    try {
        const teste = await OrdersRepository.cakeExists(cakeId);
        if (teste.rowCount === 0) return res.sendStatus(404);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function clientExists(req, res, next) {
    const { clientId } = req.body
    try {
        const teste = await OrdersRepository.clientExists(clientId);
        if (teste.rowCount === 0) return res.sendStatus(404);
        console.log("aqui")

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}