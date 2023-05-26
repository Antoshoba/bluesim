import { HttpException, HttpStatus } from "@nestjs/common";

const defaultStatus = HttpStatus.BAD_REQUEST;

export default class AppException extends HttpException {
  constructor(errorMessage: string, error?: Error) {
    super({ status: defaultStatus, message: errorMessage }, defaultStatus, {
      cause: error ?? new Error(errorMessage),
    });
  }
}
