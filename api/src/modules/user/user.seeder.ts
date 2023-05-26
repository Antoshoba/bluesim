import adminConfig from "@j2w/api/env/admin.config";
import UserRole from "@j2w/common/dto/auth/UserRole";
import { Inject, Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import UserService from "./users.service";

@Injectable()
export class UserSeeder implements OnApplicationBootstrap {
  constructor(
    private userService: UserService,
    @Inject(adminConfig.KEY) private adminConf: ConfigType<typeof adminConfig>
  ) {}

  async onApplicationBootstrap() {
    const adminCount = await this.userService.getAdminUsersCount();
    if (adminCount !== 0) {
      return;
    }
    console.log("No admins found. Creating admin user");
    const admin = await this.userService.create({
      name: this.adminConf.name,
      phone: this.adminConf.phone,
      password: this.adminConf.password,
      roles: [UserRole.ADMIN],
    });
    console.log(`Created default admin user - ${admin.name}`);
  }
}
