import UserRole from "../dto/auth/UserRole";
import UserDto from "../dto/user/UserDto";

export default class UserUtils {
  public static getUserName = (
    user?: UserDto,
    defaultName = "User"
  ): string => {
    return user?.name ?? user?.phone ?? defaultName;
  };

  public static isAdmin = (user?: UserDto) =>
    user?.roles.includes(UserRole.ADMIN);
}
