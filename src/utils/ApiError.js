class ApiError extends Error {
  constructor(
    statusCode,
    message,
    errors = [],
    data = null,
    status = false,
    stack
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = data;
    this.status = status;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
