import { CakesRepository } from "../repositories/cakesRepository.js";

export async function postCakes(req, res) {
    let { name, price, image, description } = req.body;
    const cleanName = name.trim();
    const cleanImage = image.trim();
    const cleanDescription = description.trim();

    try {
        await CakesRepository.postCakes(cleanName, price, cleanImage, cleanDescription);
        return res.sendStatus(201)
    } catch (error) {
        return res.sendStatus(error.message).status(500);
    }
}