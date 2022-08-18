import chalk from "chalk";

import { cakeSchema as cakes } from "../schemas/cakesSchema.js";

const Schemas = {
    cakes
}

export function validateJoi(object) {
    return (req, res, next) => {
        const { error } = Schemas[object].validate(req.body, { abortEarly: false });
        if(!error) return next()
        if (error.details[0].message.slice(0, 7) === `"image"`) {
            console.log(chalk.bold.red("Something went wrong, " + error.details[0].message))
            return res.sendStatus(422);
        }
        else if (error) {
            console.log(chalk.bold.red("Something went wrong, " + error.details[0].message))
            return res.sendStatus(400);
        }

        next()
    }
}