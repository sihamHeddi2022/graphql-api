import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService,private readonly jwtService:JwtService){}


    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.validate(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      login(user:User) {
        return {
            user:user,
            token:this.jwtService.sign({username:user.username,id:user._id})
        }
      
      }
    
    }
