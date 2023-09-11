/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GlapTemplateWhereInput } from "./GlapTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GlapTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GlapTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateWhereInput)
  @IsOptional()
  @Field(() => GlapTemplateWhereInput, {
    nullable: true,
  })
  every?: GlapTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => GlapTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateWhereInput)
  @IsOptional()
  @Field(() => GlapTemplateWhereInput, {
    nullable: true,
  })
  some?: GlapTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => GlapTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateWhereInput)
  @IsOptional()
  @Field(() => GlapTemplateWhereInput, {
    nullable: true,
  })
  none?: GlapTemplateWhereInput;
}
export { GlapTemplateListRelationFilter as GlapTemplateListRelationFilter };
