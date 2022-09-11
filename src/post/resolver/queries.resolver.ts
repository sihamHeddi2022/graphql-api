import { Args, Query,Resolver } from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { PostService } from "../post.service";

@Resolver()
export class PostQueriesResolver{

    // @Query( ()=>String)
    //  hello() :string{
    //     return "Hello, World"
    // }

    constructor(private readonly postService:PostService){}

    @Query(()=>[Post])
    async findAll():Promise<Post[]>{
        return this.postService.findAll()
    }

    @Query(returns=>Post)
    async find(@Args("id",{ type : () => String}) id:String):Promise<Post>{
        return this.postService.findOne(id)
    }
}