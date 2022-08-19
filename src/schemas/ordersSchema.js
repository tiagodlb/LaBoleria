import joi from "joi";

export const orderSchema = joi.object({
   clientId: joi.number().integer().required(),
   cakeId: joi.number().integer().required(),
   quantity: joi.number().integer().min(1).max(4).required(),
   totalPrice: joi.number().precision(2).required()
})