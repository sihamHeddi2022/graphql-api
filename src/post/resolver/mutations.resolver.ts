import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation,Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { CreatePostDto } from "../dto/post.dto";
import { Post } from "../models/post.model";
import { PostService } from "../post.service";

@Resolver()
export class PostMutationsResolver{

    // @Query( ()=>String)
    //  hello() :string{
    //     return "Hello, World"
    // }

    constructor(private readonly postService:PostService){}
     
    @UseGuards(JwtAuthGuard)
    @Mutation(()=>Post)
     async createPost(@Args("post",{type:()=>CreatePostDto})post:CreatePostDto,@Context() context):Promise<Post>{
     
     
        return  await this.postService.createPost(post,context.req.user.id)
    }
    @UseGuards(JwtAuthGuard)
 
    @Mutation(()=>String)
    async UpdatePost(@Args("id",{ type: ()=>  String}) id :string,@Context() context,@Args("post",{type:()=>CreatePostDto})post:CreatePostDto):Promise<String>{
        if(await this.postService.validateAuthor(context.req.user.id,id))
        { 
             await this.postService.updatePost(id,post)
            
             return "the post updated"
       }
       return 'can\'t update the post'
      
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(()=> String)
    async deletePost(@Args("id",{ type: ()=>  String}) id :string,@Context() context):Promise<string>{
        if(await this.postService.validateAuthor(context.req.user.id,id))
        { 
         await this.postService.deletePost(id)
        return 'post deleted successfully'
       }
       return 'can\'t delete the post'
    }
    @UseGuards(JwtAuthGuard)
    @Mutation(()=>String)
    async deleteAllPosts(@Context() context):Promise<String>{

         return await this.postService.deleteAll(context.req.user.id)
       
    }

}