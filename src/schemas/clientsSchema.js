import joi from "joi";

export const clientsSchema = joi.object({
   name: joi.string().required().trim(),
   address: joi.string().required().trim(),
   phone: joi.string().regex(/^[0-9]{10,11}$/).required().trim(),
})