// some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
export default class AppError extends Error {
  public readonly commonType: string;
  public readonly isOperational: boolean;

  constructor(commonType: string, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.commonType = commonType;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
