import { Request, Response, NextFunction } from 'express';
import { newProductSchema } from './schemas/validationSchemas';
import { BadRequestError, UnprocessableEntityError } from '../../errors';

const validateNewProduct = (req: Request, _res: Response, next: NextFunction): void => {
  const { error } = newProductSchema.validate(req.body);

  if (error) {
    const { details } = error;
    const [{ message, type }] = details;
    if (type === 'any.required') {
      throw new BadRequestError(message);
    }
    throw new UnprocessableEntityError(message);
  }

  next();
};

export default validateNewProduct;
