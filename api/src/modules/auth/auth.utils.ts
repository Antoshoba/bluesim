import appConfig from "@j2w/api/env/app.config";
import Environment from "@j2w/api/env/types/Environment";
import CookieUtils from "@j2w/api/util/CookieUtils";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { Request, Response } from "express";

@Injectable()
export default class AuthUtils {
  private static readonly COOKIE_NAME = "TOKEN";
  private env: Environment;

  constructor(
    @Inject(appConfig.KEY)
    appConf: ConfigType<typeof appConfig>
  ) {
    this.env = appConf.env;
  }

  public saveAuthToken(res: Response, token: string) {
    res.cookie(AuthUtils.COOKIE_NAME, token, {
      httpOnly: true,
      signed: true,
      ...CookieUtils.defaultOptions(this.env),
    });
  }

  public static getAuthUserToken(req: Request): string | null {
    const token = req.signedCookies[AuthUtils.COOKIE_NAME];
    return token ? token : null;
  }

  public logoutUser(res: Response) {
    res.cookie(AuthUtils.COOKIE_NAME, "", {
      ...CookieUtils.defaultOptions(this.env),
      httpOnly: true,
      signed: true,
      maxAge: 0,
    });
  }
}
