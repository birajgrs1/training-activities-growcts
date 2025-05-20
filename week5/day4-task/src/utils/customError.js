class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class MissingClientDataError extends CustomError {
  constructor() {
    super('Missing client data', 400);
  }
}

class ClientNotFoundError extends CustomError {
  constructor() {
    super('Client not found', 404);
  }
}

class DuplicateEmailError extends CustomError {
  constructor() {
    super('Duplicate email found', 409);
  }
}
//Applyng some server errors 
// class ServerError extends CustomError {
//   constructor(message) {
//     super('Internal Server Error', 500);
//   }
// }


export default {
  CustomError,
  MissingClientDataError,
  ClientNotFoundError,
  DuplicateEmailError
};