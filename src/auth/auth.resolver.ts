import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/model/user.model';
import { GqlAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { userDto, UserOutput } from './dto/userInput.dto';

@Resolver()
export class AuthResolver {

    constructor(private readonly auths:AuthService){}
    
    @UseGuards(GqlAuthGuard)
    @Mutation(()=> UserOutput)
    login(@Args("userDto",{type:()=>userDto})userDto:userDto,@Context() context) {
       
         
        
        return this.auths.login(context.user._doc)
        //return this.auths.login(context.)
    }



}
