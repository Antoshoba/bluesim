import { IsArray, IsEnum } from "class-validator";
import UserRole from "../auth/UserRole";
import CreateUserDto from "./CreateUserDto";

export default class InternalCreateUserDto extends CreateUserDto {
  @IsArray()
  @IsEnum(UserRole, { each: true, message: "Please provide a valid user role" })
  roles: UserRole[];
}
