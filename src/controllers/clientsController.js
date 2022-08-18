import { clientsRepository } from "../repositories/clientsRepository.js";

export async function postClients(req, res) {
    let { name, address, phone } = req.body;
    const cleanName = String(name).trim();
    const cleanAddress = String(address).trim();
    const cleanPhone = String(phone).trim();

    try {
        await clientsRepository.postClient(cleanName, cleanAddress, cleanPhone)
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}