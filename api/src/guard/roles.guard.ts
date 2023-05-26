import UserRole from "@j2w/common/dto/auth/UserRole";
import AppException from "@j2w/common/dto/error/app.exception";
import UserError from "@j2w/common/dto/error/user.error";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorator/role.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    const result = requiredRoles.some((role) => user?.roles?.includes(role));
    if (!result) {
      throw new AppException(UserError.USER_NOT_ACCESS);
    }
    return result;
  }
}
