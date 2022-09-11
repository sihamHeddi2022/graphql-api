
import { Schema } from 'mongoose';

export const PostSchema = new  Schema({
    content: String,
    image:String,
    user:{
         _id:String,
         username:String,
         first_name:String,
         last_name:String,
    }
  
},{timestamps:true});