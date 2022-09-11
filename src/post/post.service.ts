import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from './dto/post.dto';
import { Post } from './interface/post.interface';

@Injectable()
export class PostService {
       
    constructor(@InjectModel("Post") private readonly postModel:Model<Post>, private readonly userService:UserService){}
  
  
    async findAll():Promise<Post[]>{
        return await this.postModel.find({})
    }

    async findOne(id:String):Promise<Post>{
        return await this.postModel.findById(id)
    }

    async createPost(post:CreatePostDto,id:String):Promise<Post>{
        
        const u = await this.userService.findUser(id)
        
        const p = new this.postModel({...post,user:u})
      
        return await p.save()
    }

    async updatePost(id:string,post:CreatePostDto):Promise<Post>{

        return await this.postModel.findOneAndUpdate({_id:id},post)
    }
  
    async deletePost(id:string){

        await this.postModel.findOneAndRemove({_id:id})
    }
    async  validateAuthor(userId:String,id:String):Promise<Boolean> {
        try {
            const post = await this.postModel.findById(id)
           return post && post.user._id == userId

        } catch (err) {
             throw new Error("can't delete the post");
        }
    }
    async deleteAll(userId:String):Promise<String>{

       try {
       
            await this.postModel.deleteMany({"user._id":userId})
            return "all posts deleted succufully"
       } catch (error) {
           throw error
       }
    }
}
