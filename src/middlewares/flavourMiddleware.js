import { FlavoursRepository } from "../repositories/flavoursRepository.js";

export async function flavourExists(req, res, next) {
    const { name } = req.body
    const cleanName = String(name).trim();

    try {
        const flavour = await FlavoursRepository.flavourExists(cleanName);
        if (flavour.rowCount > 0) return res.sendStatus(409);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}