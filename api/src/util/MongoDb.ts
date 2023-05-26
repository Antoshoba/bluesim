import { Inject } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from "@nestjs/mongoose";
import dbConfig from "../env/db.config";

export default class MongoDb implements MongooseOptionsFactory {
  constructor(
    @Inject(dbConfig.KEY)
    private dbConf: ConfigType<typeof dbConfig>
  ) {}

  createMongooseOptions(): MongooseModuleOptions {
    return { uri: this.getConnectionString() };
  }

  private getConnectionString() {
    const url = this.dbConf.url;
    const user = this.dbConf.user;
    const password = this.dbConf.password;
    const database = this.dbConf.database;
    const authDatabase = this.dbConf.authDatabase;
    const protocol = this.dbConf.useSrv ? "mongodb+srv" : "mongodb";
    return (
      `${protocol}://` +
      (user ? `${user}:${password}@` : "@") +
      `${url}/${database}` +
      (authDatabase ? `?authSource=${authDatabase}` : "")
    );
  }
}
