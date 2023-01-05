import Joi from 'joi';

export const amountSchema = Joi.string().min(3).required().messages({
  'string.base': '"amount" must be a string',
  'string.empty': '"amount" is required',
  'string.min': '"amount" length must be at least 3 characters long',
});

export const nameSchema = Joi.string().min(3).required().messages({
  'string.base': '"name" must be a string',
  'string.empty': '"name" is required',
  'string.min': '"name" length must be at least 3 characters long',
});

export const newProductSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});
