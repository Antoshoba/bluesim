import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import UserModule from "../user/user.module";
import AuthController from "./auth.controller";
import AuthUtils from "./auth.utils";
import JwtConfigService from "./jwt/jwt-config.service";
import JwtStrategy from "./jwt/jwt.strategy";
import LocalStrategy from "./local/local.strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({ useClass: JwtConfigService }),
  ],
  providers: [LocalStrategy, JwtStrategy, AuthUtils],
  controllers: [AuthController],
})
export class AuthModule {}
