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
import { GlAllocateWhereInput } from "./GlAllocateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GlAllocateOrderByInput } from "./GlAllocateOrderByInput";

@ArgsType()
class GlAllocateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GlAllocateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GlAllocateWhereInput, { nullable: true })
  @Type(() => GlAllocateWhereInput)
  where?: GlAllocateWhereInput;

  @ApiProperty({
    required: false,
    type: [GlAllocateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GlAllocateOrderByInput], { nullable: true })
  @Type(() => GlAllocateOrderByInput)
  orderBy?: Array<GlAllocateOrderByInput>;

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

export { GlAllocateFindManyArgs as GlAllocateFindManyArgs };
