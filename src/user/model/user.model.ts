import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class User {
  @Field(type => String)
  _id: String;

  @Field(type=>String)
    first_name: string;

   @Field(type=>String)
    last_name: string;

    @Field(type=>String)
    username: string;
 

}