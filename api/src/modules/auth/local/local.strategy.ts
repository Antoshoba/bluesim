import { Injectable } from "@nestjs/common";

import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import UserService from "../../user/users.service";

@Injectable()
export default class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: "phone", passwordField: "password" });
  }

  async validate(phone: string, password: string) {
    const user = await this.userService.loginUser({ phone, password });
    return user;
  }
}
