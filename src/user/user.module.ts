import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: "User", schema: userSchema }])],
  providers: [UserService, UserResolver,],
  exports:[UserService]
})
export class UserModule {}
