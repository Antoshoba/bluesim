import UserRole from "@j2w/common/dto/auth/UserRole";
import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = "roles";
const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
export default Roles;
