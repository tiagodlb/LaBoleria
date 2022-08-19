import { FlavoursRepository } from "../repositories/flavoursRepository.js";

export async function postFlavour(req, res) {
    let { name } = req.body;
    const cleanName = String(name).trim();

    try {
        await FlavoursRepository.postFlavour(cleanName);
        return res.sendStatus(201)
    } catch (error) {
        return res.sendStatus(error.message).status(500);
    }
}