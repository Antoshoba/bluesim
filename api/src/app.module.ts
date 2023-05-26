import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import APP_CONFIG from "./env";
import JwtAuthGuard from "./guard/jwt-auth.guard";
import { RolesGuard } from "./guard/roles.guard";
import CsrfHandler from "./middlewares/CsrfHandler";
import ALL_MODULES from "./modules";
import MongoDb from "./util/MongoDb";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: APP_CONFIG, cache: true }),
    MongooseModule.forRootAsync({ useClass: MongoDb }),
    ...ALL_MODULES,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CsrfHandler).forRoutes("*");
  }
}
