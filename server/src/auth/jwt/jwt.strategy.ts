import { Inject, Injectable } from "@nestjs/common";
import { JWT_SECRET_KEY } from "../../constants";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { AdminService } from "../../admin/admin.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase {
  constructor(
    @Inject(JWT_SECRET_KEY) secretOrKey: string,
    protected readonly adminService: AdminService
  ) {
    super(secretOrKey, adminService);
  }
}
