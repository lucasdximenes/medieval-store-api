import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import { newProductSchema, newUserSchema } from './schemas/validationSchemas';
import { BadRequestError, UnprocessableEntityError } from '../../errors';

const handleError = (error: ValidationError): void => {
  const { details } = error;
  const [{ message, type }] = details;
  if (type === 'any.required') {
    throw new BadRequestError(message);
  }
  throw new UnprocessableEntityError(message);
};

export const validateNewProduct = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const { error } = newProductSchema.validate(req.body);

  if (error) {
    handleError(error);
  }

  next();
};

export const validateNewUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const { error } = newUserSchema.validate(req.body);

  if (error) {
    handleError(error);
  }

  next();
};
