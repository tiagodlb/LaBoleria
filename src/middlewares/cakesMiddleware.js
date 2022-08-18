import { CakesRepository } from "../repositories/cakesRepository.js";

export async function cakeExists(req, res, next) {
    const { name } = req.body
    try {
        const teste = await CakesRepository.cakeExists(name);
        console.log(teste)
        if (teste.rowCount > 0) return res.sendStatus(409);

        return next()
    } catch (error) {
        return res.sendStatus(500);
    }
}