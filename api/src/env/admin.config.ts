import { registerAs } from "@nestjs/config";
import { IsNumberString, IsString } from "class-validator";
import EnvPath from "./types/EnvPath";
import { validateEnv } from "./utils/env.validation";

class AdminConfigEnvDto {
  @IsString({
    message: "Please provide a valid default admin name in env file",
  })
  DEFAULT_ADMIN_NAME: string;

  @IsNumberString(
    {},
    { message: "Please provide a valid default admin phone in env file" }
  )
  DEFAULT_ADMIN_PHONE: string;

  @IsString({
    message: "Please provide a valid default admin password in env file",
  })
  DEFAULT_ADMIN_PASSWORD: string;
}

export interface AdminConfigDto {
  name: string;
  phone: string;
  password: string;
}

export default registerAs(EnvPath.ADMIN, (): AdminConfigDto => {
  const env = validateEnv(process.env, AdminConfigEnvDto);
  return {
    name: env.DEFAULT_ADMIN_NAME,
    phone: env.DEFAULT_ADMIN_PHONE,
    password: env.DEFAULT_ADMIN_PASSWORD,
  };
});
