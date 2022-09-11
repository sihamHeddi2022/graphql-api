import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,  
    autoSchemaFile: true,
 
  }), PostModule, UserModule,MongooseModule.forRoot('mongodb://localhost/blog'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
