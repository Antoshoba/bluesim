import { AppConfigDto } from "../app.config";
import { AwsConfigDto } from "../aws.config";
import { CookieConfigDto } from "../cookie.config";
import { DbConfigDto } from "../db.config";
import EnvPath from "./EnvPath";

export default interface EnvironmentVariables {
  [EnvPath.APP]: AppConfigDto;
  [EnvPath.COOKIE]: CookieConfigDto;
  [EnvPath.DB]: DbConfigDto;
  [EnvPath.AWS]: AwsConfigDto;
}
