import { Strategy } from "passport-jwt";

import appConfig from "@j2w/api/env/app.config";
import AuthUtils from "@j2w/api/modules/auth/auth.utils";
import AuthDto, { PlainAuthDto } from "@j2w/common/dto/user/AuthDto";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(appConfig.KEY)
    appConf: ConfigType<typeof appConfig>
  ) {
    super({
      jwtFromRequest: AuthUtils.getAuthUserToken,
      ignoreExpiration: false,
      secretOrKey: appConf.secretKey,
    });
  }

  validate(payload: PlainAuthDto) {
    return new AuthDto(payload);
  }
}
