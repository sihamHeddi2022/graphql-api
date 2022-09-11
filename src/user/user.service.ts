import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel:Model<User>){}
    
    async findUser(id:String):Promise<User>{
        try {
            const user =  await this.userModel.findById(id)
            return user
        } catch (error) {
            throw new Error("user does not exist");
            
        }
    }

    async  validate(username:String): Promise<User>{
        try {
            const user =  await this.userModel.findOne({username:username})
            return user
        } catch (error) {
            
            throw new Error("user does not exist");
            
        }
    }

}
