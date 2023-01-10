import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors';

const { JWT_SECRET } = process.env;

const auth = (req: Request, _res: Response, next: NextFunction): void => {
  const token = req.get('Authorization');

  if (!token) {
    throw new UnauthorizedError('Token not found');
  }

  try {
    const decodedUser = jwt.verify(token, JWT_SECRET as string);
    req.body.user = decodedUser;
    next();
  } catch (err) {
    throw new UnauthorizedError('Invalid token');
  }
};

export default auth;
