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

export const usernameSchema = Joi.string().min(3).required().messages({
  'string.base': '"username" must be a string',
  'string.empty': '"username" is required',
  'string.min': '"username" length must be at least 3 characters long',
});

export const vocationSchema = Joi.string().min(3).required().messages({
  'string.base': '"vocation" must be a string',
  'string.empty': '"vocation" is required',
  'string.min': '"vocation" length must be at least 3 characters long',
});

export const levelSchema = Joi.number().integer().min(1).required()
  .messages({
    'number.base': '"level" must be a number',
    'number.empty': '"level" is required',
    'number.min': '"level" must be greater than or equal to 1',
    'number.integer': '"level" must be an integer',
  });

export const passwordSchema = Joi.string().min(8).required().messages({
  'string.base': '"password" must be a string',
  'string.empty': '"password" is required',
  'string.min': '"password" length must be at least 8 characters long',
});

export const newUserSchema = Joi.object({
  username: usernameSchema,
  vocation: vocationSchema,
  level: levelSchema,
  password: passwordSchema,
});

export const loginSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

export const productsIdsSchema = Joi.array()
  .items(
    Joi.number().integer().min(1).required()
      .messages({
        'number.base': '"productsIds" must be a number',
        'number.empty': '"productsIds" is required',
        'number.min': '"productsIds" must be greater than or equal to 1',
        'number.integer': '"productsIds" must be an integer',
      }),
  )
  .required()
  .min(1)
  .messages({
    'array.base': '"productsIds" must be an array',
    'array.empty': '"productsIds" is required',
    'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
  });

export const newOrderSchema = Joi.object({
  productsIds: productsIdsSchema,
});
