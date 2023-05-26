import AppError from "@j2w/common/dto/error/app.error";
import AppException from "@j2w/common/dto/error/app.exception";
import { Injectable } from "@nestjs/common";

import { AuthGuard } from "@nestjs/passport";

@Injectable()
export default class LocalAuthGuard extends AuthGuard("local") {
  handleRequest<User>(err: any, user: any) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      if (err instanceof AppException) {
        throw err;
      }
      throw new AppException(AppError.ACCESS_DENIED, err);
    }
    return user as User;
  }
}
