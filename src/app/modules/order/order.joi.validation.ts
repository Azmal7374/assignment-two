import Joi from "joi";
import { emit } from "process";


const orderValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    productId: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().integer().positive().required(),
})


export default orderValidationSchema