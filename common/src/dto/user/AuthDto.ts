import User from "@j2w/common/schemas/user.schema";
import UserRole from "../auth/UserRole";

export interface PlainAuthDto {
  id: string;
  roles: UserRole[];
  loginTime: Date;
}

export default class AuthDto implements PlainAuthDto {
  id: string;
  roles: UserRole[];
  loginTime: Date;

  constructor(obj: PlainAuthDto) {
    this.id = obj.id;
    this.roles = obj.roles;
    this.loginTime = obj.loginTime;
  }

  toPlainObject(): PlainAuthDto {
    return { id: this.id, roles: this.roles, loginTime: this.loginTime };
  }

  static from(user: User) {
    return new AuthDto({
      id: user._id?.toString() ?? "",
      roles: user.roles,
      loginTime: new Date(),
    });
  }
}
