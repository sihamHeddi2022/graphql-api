import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/model/user.model";

@InputType()
export class userDto {
    @Field(()=>String)
    username:string;
    @Field(()=>String)

    password:string;
}

@ObjectType()
export class UserOutput {
    @Field(()=>User)
    user:User;
    @Field(()=>String)

    token:string;
}