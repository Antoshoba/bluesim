import { registerAs } from "@nestjs/config";
import { IsString, MinLength } from "class-validator";
import EnvPath from "./types/EnvPath";
import { validateEnv } from "./utils/env.validation";

class CookieConfigEnvDto {
  @IsString({ message: "Please provide a valid csrf cookie name in env file" })
  @MinLength(5, {
    message: "CSRF cookie name must be atleast 5 characters long",
  })
  CSRF_COOKIE_NAME: string;

  @IsString({ message: "Please provide a valid cookie sign key in env" })
  @MinLength(10, {
    message: "Cookie sign key must be atleast 10 characters long",
  })
  COOKIE_SIGN_KEY: string;
}

export interface CookieConfigDto {
  csrfCookieName: string;
  signKey: string;
}

export default registerAs(EnvPath.COOKIE, (): CookieConfigDto => {
  const env = validateEnv(process.env, CookieConfigEnvDto);
  return {
    csrfCookieName: env.CSRF_COOKIE_NAME,
    signKey: env.COOKIE_SIGN_KEY,
  };
});
