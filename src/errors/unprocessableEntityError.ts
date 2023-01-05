import AppError from './appError';

export default class UnprocessableEntityError extends AppError {
  constructor(message: string) {
    super(message, 422);
  }
}
