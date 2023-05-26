import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import EnvironmentVariables from "../env/types/EnvironmentVariables";
import EnvPath from "../env/types/EnvPath";
import CsrfHandler from "../middlewares/CsrfHandler";
import CookieUtils from "./CookieUtils";

export default class AppUtils {
  static getConfigValues = (app: INestApplication) => {
    const configService: ConfigService<EnvironmentVariables, true> =
      app.get(ConfigService);
    const { env, port, corsDomains } = configService.get(EnvPath.APP, {
      infer: true,
    });
    const { signKey, csrfCookieName } = configService.get(EnvPath.COOKIE, {
      infer: true,
    });
    return { port, corsDomains, signKey, csrfCookieName, env };
  };

  static enbaleCorsAndCsrf = (app: INestApplication) => {
    const { corsDomains, signKey, csrfCookieName, env } =
      AppUtils.getConfigValues(app);

    // CORS
    app.enableCors({
      origin: corsDomains,
      credentials: true,
      optionsSuccessStatus: 200,
    });

    // CSRF
    app.use(cookieParser(signKey));
    app.use(
      csurf({
        cookie: {
          httpOnly: true,
          signed: true,
          ...CookieUtils.defaultOptions(env),
        },
        value: CsrfHandler.getToken.bind(CsrfHandler, csrfCookieName),
      })
    );
  };
}
