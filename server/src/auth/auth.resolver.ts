import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { AdminInfo } from "./AdminInfo";

@Resolver(AdminInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => AdminInfo)
  async login(@Args() args: LoginArgs): Promise<AdminInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => AdminInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async adminInfo(@UserData() entityInfo: AdminInfo): Promise<AdminInfo> {
    return entityInfo;
  }
}
