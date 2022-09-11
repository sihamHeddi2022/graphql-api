
import { Schema } from 'mongoose';

export const userSchema = new  Schema({
     first_name:String,
     last_name:String,
     username:String,
     password:String
  
});