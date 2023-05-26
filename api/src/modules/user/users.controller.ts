import { CurrentUser } from "@j2w/api/decorator/currentUser.decorator";
import Roles from "@j2w/api/decorator/role.decorator";
import UserRole from "@j2w/common/dto/auth/UserRole";
import AuthDto from "@j2w/common/dto/user/AuthDto";
import CreateUserDto from "@j2w/common/dto/user/CreateUserDto";
import UserDto from "@j2w/common/dto/user/UserDto";
import { Body, Controller, Get, Post, Query, Req } from "@nestjs/common";
import { Request } from "express";
import { UploadService } from "../common/upload/upload.service";
import UserService from "./users.service";

@Controller("user")
export default class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly uploadService: UploadService
  ) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async createAdminUser(@Body() request: CreateUserDto) {
    const newUser = await this.userService.create({
      ...request,
      roles: [UserRole.ADMIN],
    });
    return new UserDto(newUser);
  }

  @Get()
  @Roles(UserRole.ADMIN)
  async fetchAll() {
    const users = await this.userService.findAll();
    return users.map((user) => new UserDto(user));
  }

  @Roles(UserRole.ADMIN)
  @Get("admin")
  onlyAdmin(@Req() request: Request) {
    return request.user;
  }

  @Roles(UserRole.ADMIN)
  @Get("media/presigned-url")
  async getPresignedUrlforNewMedia(
    @Query("name") name: string,
    @CurrentUser() user: AuthDto
  ) {
    const presignedRequest = await this.uploadService.getPresignedUrl(
      "media/" + user.id,
      name
    );
    return presignedRequest;
  }
}
