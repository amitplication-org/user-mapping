import { Field, ObjectType } from "@nestjs/graphql";
import { Admin } from "../admin/base/Admin";

@ObjectType()
export class AdminInfo implements Partial<Admin> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
