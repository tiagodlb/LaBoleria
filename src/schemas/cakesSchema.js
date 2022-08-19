import joi from "joi";

export const cakeSchema = joi.object({
   name: joi.string().required().min(2).trim(),
   price: joi.number().greater(0).required(),
   image: joi.string().uri().required().trim(),
   description: joi.string().allow("").trim(),
   flavourId: joi.number().integer().required()
})