import appConfig from "@j2w/api/env/app.config";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

@Injectable()
export default class JwtConfigService implements JwtOptionsFactory {
  constructor(
    @Inject(appConfig.KEY)
    private appConf: ConfigType<typeof appConfig>
  ) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.appConf.secretKey,
      signOptions: { expiresIn: "365d" },
    };
  }
}
