import AppError from './appError';

export default class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}
