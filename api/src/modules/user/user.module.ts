import User, { UserSchema } from "@j2w/common/schemas/user.schema";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UploadModule } from "../common/upload/upload.module";
import { UserSeeder } from "./user.seeder";
import UserController from "./users.controller";
import UserService from "./users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UploadModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserSeeder],
  exports: [UserService],
})
export default class UserModule {}
