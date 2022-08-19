import { clientsRepository } from "../repositories/clientsRepository.js";

export async function clientExists(req, res, next) {
    const { id } = req.params
    try {
        const client = await clientsRepository.clientExists(id);
        if (client.rowCount === 0) return res.sendStatus(404);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}