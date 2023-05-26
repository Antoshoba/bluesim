import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import UserRole from "../dto/auth/UserRole";
import TimeStampDocument from "../dto/common/TimeStampDocument";
import AppException from "../dto/error/app.exception";
import UserError from "../dto/error/user.error";
import PasswordHash from "../utils/PasswordHash";

@Schema({ timestamps: true, collection: "users" })
export default class User extends TimeStampDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [String], enum: UserRole, trim: true, required: true })
  roles: UserRole[];

  async setPassword(password: string) {
    this.password = await PasswordHash.encrypt(password);
  }

  async validatePassword(password: string) {
    const passwordHash = this.password;
    if (!passwordHash) {
      throw new AppException(UserError.PASSWORD_NOT_SAVED);
    }
    return PasswordHash.compare(passwordHash, password);
  }

  async updatePassword(oldPassword: string, newPassword: string) {
    const isOldPasswordValid = await this.validatePassword(oldPassword);
    if (isOldPasswordValid) {
      await this.setPassword(newPassword);
    } else {
      throw new AppException(UserError.OLD_PASSWORD_INCORRECT);
    }
  }
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.loadClass(User);

export { UserSchema };
