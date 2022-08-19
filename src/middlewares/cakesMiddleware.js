import { CakesRepository } from "../repositories/cakesRepository.js";

export async function cakeExists(req, res, next) {
    const { name } = req.body
    const cleanName = String(name).trim();

    try {
        const cake = await CakesRepository.cakeExists(cleanName);
        if (cake.rowCount > 0) return res.sendStatus(409);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}

export async function flavourExists(req, res, next) {
    const { flavourId } = req.body;
    try {
        const flavour = await CakesRepository.flavourExists(flavourId);
        if (flavour.rowCount === 0) return res.sendStatus(404);
        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}