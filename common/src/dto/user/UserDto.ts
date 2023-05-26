import User from "@j2w/common/schemas/user.schema";
import UserRole from "../auth/UserRole";

export default class UserDto {
  id: string;
  name: string;
  phone: string;
  roles: UserRole[];
  createdAt: Date;

  constructor(user: User) {
    this.id = user._id?.toString() ?? "";
    this.name = user.name;
    this.phone = user.phone;
    this.roles = user.roles;
    this.createdAt = user.createdAt;
  }
}
