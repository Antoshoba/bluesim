import AppError from "@j2w/common/dto/error/app.error";
import AppException from "@j2w/common/dto/error/app.exception";
import { ExecutionContext, Injectable } from "@nestjs/common";

import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "../decorator/public.decorator";

@Injectable()
export default class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest<T>(err: any, user: any) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw new AppException(AppError.ACCESS_DENIED, err);
    }
    return user as T;
  }
}
