import Joi from 'joi';

export const amountSchema = Joi.string().min(3).required().messages({
  'string.base': 'amount must be a string', // 400
  'string.empty': 'amount is required', // 422
  'string.min': 'amount must be at least 3 characters long', // 422
});

export const nameSchema = Joi.string().min(3).required().messages({
  'string.base': 'name must be a string', // 400
  'string.empty': 'name is required', // 422
  'string.min': 'name must be at least 3 characters long', // 422
});

export const newProductSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});
