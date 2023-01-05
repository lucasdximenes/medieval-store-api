export default class AppError extends Error {
  public readonly statusCode: number;

  public readonly message: string;

  public readonly isOperational: boolean;

  constructor(message = 'Internal server error', statusCode = 500) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = true;
  }
}
