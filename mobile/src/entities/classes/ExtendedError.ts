export class ExtendedError extends Error {
  public response?: any;
  public statusCode?: number;

  constructor(message: string, response?: any, statusCode?: number) {
    super(message);
    this.name = 'ExtendedError';
    this.response = response;
    this.statusCode = statusCode;
    
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExtendedError);
    }
  }
}
