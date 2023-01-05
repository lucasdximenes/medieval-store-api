import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/appError';

const errorMiddleware = (
  err: Error & AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorMiddleware;
