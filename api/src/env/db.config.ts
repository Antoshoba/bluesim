import { registerAs } from "@nestjs/config";
import { IsBooleanString, IsString } from "class-validator";
import EnvPath from "./types/EnvPath";
import { validateEnv } from "./utils/env.validation";

class DbConfigEnvDto {
  @IsString({ message: "Please provide a valid database url in env file" })
  DB_URL: string;

  @IsString({ message: "Please provide a valid database url in env file" })
  DB_USER: string;

  @IsString({ message: "Please provide a valid database password in env file" })
  DB_PASSWORD: string;

  @IsString({ message: "Please provide a valid database name in env file" })
  DB_DATABASE: string;

  @IsString({
    message: "Please provide a valid database auth name in env file",
  })
  DB_AUTH_DATABASE: string;

  @IsBooleanString({
    message: "Please provide a valid db use srv value in env file",
  })
  DB_USE_SRV: string;
}

export interface DbConfigDto {
  url: string;
  user: string;
  password: string;
  database: string;
  authDatabase: string;
  useSrv: boolean;
}

export default registerAs(EnvPath.DB, (): DbConfigDto => {
  const env = validateEnv(process.env, DbConfigEnvDto);
  return {
    url: env.DB_URL,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    authDatabase: env.DB_AUTH_DATABASE,
    useSrv: env.DB_USE_SRV === "true",
  };
});
