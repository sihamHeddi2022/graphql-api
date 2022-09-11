import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/model/user.model';


@ObjectType()
export class Post {
  @Field(type => String)
  _id: String;

  @Field(type=>String)
    content: string;

  @Field(type => Date)
  createdAt: Date;

  @Field(type => Date)
  updatedAt: Date;
  
  @Field(type => String, { nullable: true })
  image: String;

  @Field(type => User)
  user: User;


}