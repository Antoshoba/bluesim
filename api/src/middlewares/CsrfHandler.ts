import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { NextFunction, Request, Response } from "express";
import appConfig from "../env/app.config";
import cookieConfig from "../env/cookie.config";
import CookieUtils from "../util/CookieUtils";

@Injectable()
export default class CsrfHandler implements NestMiddleware {
  constructor(
    @Inject(cookieConfig.KEY)
    private cookie: ConfigType<typeof cookieConfig>,

    @Inject(appConfig.KEY)
    private appConf: ConfigType<typeof appConfig>
  ) {}

  public static getToken(cookieName: string, req: Request) {
    return req.headers[cookieName]?.toString() ?? "";
  }

  private static getHostName(name: string) {
    return name.split(":")[0];
  }

  public use(req: Request, res: Response, next: NextFunction): void {
    const cookieDomains = this.appConf.corsDomains;
    const cookieName = this.cookie.csrfCookieName;
    if (!cookieDomains) {
      console.error("Please provide valid cookie domains");
      return next();
    }
    if (!res.headersSent) {
      const domain = req.headers.host ?? "";
      if (!cookieDomains.some((testDomain) => testDomain.test(domain))) {
        console.error(cookieDomains);
        console.error(domain);
        console.error(
          "Your cookie domain env value does not match with the request domain"
        );
      } else {
        res.cookie(cookieName, req.csrfToken(), {
          domain: CsrfHandler.getHostName(domain),
          ...CookieUtils.defaultOptions(this.appConf.env),
        });
      }
    }
    return next();
  }
}
