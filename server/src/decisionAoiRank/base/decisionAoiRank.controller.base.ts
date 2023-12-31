/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DecisionAoiRankService } from "../decisionAoiRank.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DecisionAoiRankCreateInput } from "./DecisionAoiRankCreateInput";
import { DecisionAoiRankWhereInput } from "./DecisionAoiRankWhereInput";
import { DecisionAoiRankWhereUniqueInput } from "./DecisionAoiRankWhereUniqueInput";
import { DecisionAoiRankFindManyArgs } from "./DecisionAoiRankFindManyArgs";
import { DecisionAoiRankUpdateInput } from "./DecisionAoiRankUpdateInput";
import { DecisionAoiRank } from "./DecisionAoiRank";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DecisionAoiRankControllerBase {
  constructor(
    protected readonly service: DecisionAoiRankService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DecisionAoiRank })
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRank",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: DecisionAoiRankCreateInput
  ): Promise<DecisionAoiRank> {
    return await this.service.create({
      data: data,
      select: {
        departmentId: true,
        periodId: true,
        interestId: true,
        decision: true,
        timestamp: true,
        luUsersUsertypesId: true,
        ranking: true,
        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DecisionAoiRank] })
  @ApiNestedQuery(DecisionAoiRankFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRank",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<DecisionAoiRank[]> {
    const args = plainToClass(DecisionAoiRankFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        departmentId: true,
        periodId: true,
        interestId: true,
        decision: true,
        timestamp: true,
        luUsersUsertypesId: true,
        ranking: true,
        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DecisionAoiRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRank",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: DecisionAoiRankWhereUniqueInput
  ): Promise<DecisionAoiRank | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        departmentId: true,
        periodId: true,
        interestId: true,
        decision: true,
        timestamp: true,
        luUsersUsertypesId: true,
        ranking: true,
        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DecisionAoiRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRank",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: DecisionAoiRankWhereUniqueInput,
    @common.Body() data: DecisionAoiRankUpdateInput
  ): Promise<DecisionAoiRank | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          departmentId: true,
          periodId: true,
          interestId: true,
          decision: true,
          timestamp: true,
          luUsersUsertypesId: true,
          ranking: true,
          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DecisionAoiRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DecisionAoiRank",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: DecisionAoiRankWhereUniqueInput
  ): Promise<DecisionAoiRank | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          departmentId: true,
          periodId: true,
          interestId: true,
          decision: true,
          timestamp: true,
          luUsersUsertypesId: true,
          ranking: true,
          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
