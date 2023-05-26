import IsPublic from "@j2w/api/decorator/public.decorator";
import LocalAuthGuard from "@j2w/api/guard/local-auth.guard";
import AppError from "@j2w/common/dto/error/app.error";
import AppException from "@j2w/common/dto/error/app.exception";
import AuthDto from "@j2w/common/dto/user/AuthDto";
import User from "@j2w/common/schemas/user.schema";
import { Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";
import AuthUtils from "./auth.utils";

@Controller("auth")
export default class AuthController {
  constructor(private jwtService: JwtService, private authUtils: AuthUtils) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Req() request: Request, @Res() response: Response) {
    const user = request.user as User | undefined;
    if (!user) {
      throw new AppException(AppError.ACCESS_DENIED);
    }
    const payload = AuthDto.from(user);
    this.authUtils.saveAuthToken(
      response,
      this.jwtService.sign(payload.toPlainObject())
    );
    return response.send(user);
  }

  @Post("logout")
  logout(@Res() response: Response) {
    this.authUtils.logoutUser(response);
    return response.send();
  }

  @Get("me")
  getProfile(@Req() request: Request) {
    return request.user;
  }
}
