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
import { GlapTemplateDetailWhereUniqueInput } from "./GlapTemplateDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GlapTemplateDetailUpdateInput } from "./GlapTemplateDetailUpdateInput";

@ArgsType()
class UpdateGlapTemplateDetailArgs {
  @ApiProperty({
    required: true,
    type: () => GlapTemplateDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateDetailWhereUniqueInput)
  @Field(() => GlapTemplateDetailWhereUniqueInput, { nullable: false })
  where!: GlapTemplateDetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GlapTemplateDetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateDetailUpdateInput)
  @Field(() => GlapTemplateDetailUpdateInput, { nullable: false })
  data!: GlapTemplateDetailUpdateInput;
}

export { UpdateGlapTemplateDetailArgs as UpdateGlapTemplateDetailArgs };
