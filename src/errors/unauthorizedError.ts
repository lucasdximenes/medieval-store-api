import AppError from './appError';

export default class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}
