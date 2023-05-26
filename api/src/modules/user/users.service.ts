import UserRole from "@j2w/common/dto/auth/UserRole";
import AppException from "@j2w/common/dto/error/app.exception";
import UserError from "@j2w/common/dto/error/user.error";
import InternalCreateUserDto from "@j2w/common/dto/user/InternalCreateUserDto";
import LoginRequestDto from "@j2w/common/dto/user/LoginRequestDto";
import User from "@j2w/common/schemas/user.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export default class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(request: InternalCreateUserDto) {
    await this.checkExistingUserWithPhone(request.phone);
    const existingUser = await this.findOne(request.phone);
    if (existingUser) {
      throw new AppException(UserError.USER_ALREADY_REGISTERED);
    }
    let createdUser = new this.userModel(request);
    await createdUser.setPassword(request.password);
    createdUser = await createdUser.save();
    return createdUser;
  }

  async findAll() {
    const user = await this.userModel.find();
    return user;
  }

  async findUserById(id: string) {
    const user = await this.userModel.findOne({
      _id: id,
    });
    if (!user) {
      throw new AppException(UserError.USER_NOT_FOUND);
    }
    return user;
  }

  async findOne(phone: string) {
    const user = await this.userModel.findOne({ phone });
    return user;
  }

  async loginUser(data: LoginRequestDto) {
    const user = await this.findOne(data.phone);
    if (!user) {
      throw new AppException(UserError.USER_NOT_FOUND);
    }

    if (!(await user.validatePassword(data.password))) {
      throw new AppException(UserError.AUTHENTICATION_FAILED);
    }
    return user;
  }

  async getAdminUsersCount() {
    const count = await this.userModel.countDocuments({
      roles: UserRole.ADMIN,
    });
    return count;
  }

  private async checkExistingUserWithPhone(phone: string) {
    const existingUser = await this.findOne(phone);
    if (existingUser) {
      throw new AppException(UserError.USER_ALREADY_REGISTERED);
    }
  }
}
