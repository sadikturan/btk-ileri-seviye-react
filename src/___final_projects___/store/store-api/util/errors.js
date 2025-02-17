class BadRequestError {
  constructor(message) {
    this.message = message;
    this.status = 400;
  }
}

class UnAuthorizedError {
  constructor(message) {
    this.message = message;
    this.status = 401;
  }
}

class NotFoundError {
  constructor(message) {
    this.message = message;
    this.status = 404;
  }
}

class ValidationError {
  constructor(message, errors) {
    this.message = message;
    this.errors = errors;
    this.status = 403;
  }
}

class ServerError {
  constructor(message, details) {
    this.message = message;
    this.details = details;
    this.status = 500;
  }
}

exports.NotFoundError = NotFoundError;
exports.BadRequestError = BadRequestError;
exports.UnAuthorizedError = UnAuthorizedError;
exports.ServerError = ServerError;
exports.ValidationError = ValidationError;
