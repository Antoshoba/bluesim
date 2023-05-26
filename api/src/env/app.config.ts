import { registerAs } from "@nestjs/config";
import { Transform } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsInt,
  IsString,
  Min,
  MinLength,
} from "class-validator";
import TransformUtils from "../util/TransformUtils";
import Environment from "./types/Environment";
import EnvPath from "./types/EnvPath";
import { validateEnv } from "./utils/env.validation";

class AppConfigEnvDto {
  @IsEnum(Environment, { message: "Please provide a valid env in env file" })
  ENV: Environment;

  @IsInt({ message: "Please provide a valid port number in env file" })
  @Min(1000, { message: "Please provide a port number greater than 1000" })
  PORT: number;

  @IsString({ message: "Please provide a non empty secret key in env file" })
  @MinLength(10, {
    message: "Please provide a secret key with atleast 10 characters",
  })
  SECRET_KEY: string;

  @IsArray({ message: "Please provide an array of valid cors domains" })
  @IsString({ message: "Each cors domain should be a string", each: true })
  @Transform(TransformUtils.toStringArray)
  CORS_DOMAINS: string[];
}

export interface AppConfigDto {
  env: Environment;
  port: number;
  secretKey: string;
  corsDomains: RegExp[];
}

export default registerAs(EnvPath.APP, (): AppConfigDto => {
  const env = validateEnv(process.env, AppConfigEnvDto);
  return {
    env: env.ENV,
    port: env.PORT,
    secretKey: env.SECRET_KEY,
    corsDomains: env.CORS_DOMAINS.map((item) => new RegExp(item)),
  };
});
