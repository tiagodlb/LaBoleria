import { clientsRepository } from "../repositories/clientsRepository";

export async function postClients(req, res) {
    let { name, address, phone } = req.body;
    const cleanName = name.trim();
    const cleanAddress = address.trim();
    const cleanPhone = phone.trim();

    try {
        await clientsRepository.postClient(cleanName, cleanAddress, cleanPhone)
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}