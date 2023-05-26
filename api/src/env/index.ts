import { ConfigFactory, ConfigObject } from "@nestjs/config";
import adminConfig from "./admin.config";
import appConfig from "./app.config";
import awsConfig from "./aws.config";
import cookieConfig from "./cookie.config";
import dbConfig from "./db.config";

const APP_CONFIG: ConfigFactory<ConfigObject>[] = [
  appConfig,
  cookieConfig,
  dbConfig,
  awsConfig,
  adminConfig,
];

export default APP_CONFIG;
