/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SomeThingWhereInput } from "./SomeThingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SomeThingOrderByInput } from "./SomeThingOrderByInput";

@ArgsType()
class SomeThingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SomeThingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SomeThingWhereInput, { nullable: true })
  @Type(() => SomeThingWhereInput)
  where?: SomeThingWhereInput;

  @ApiProperty({
    required: false,
    type: [SomeThingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SomeThingOrderByInput], { nullable: true })
  @Type(() => SomeThingOrderByInput)
  orderBy?: Array<SomeThingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SomeThingFindManyArgs as SomeThingFindManyArgs };