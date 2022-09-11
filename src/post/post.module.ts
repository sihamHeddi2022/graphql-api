import { Module } from '@nestjs/common';
import { PostQueriesResolver } from './resolver/queries.resolver';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/post.schema';
import { PostMutationsResolver } from './resolver/mutations.resolver';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
     imports:[MongooseModule.forFeature([{ name: "Post", schema: PostSchema }]),UserModule],
     providers: [PostQueriesResolver,PostMutationsResolver, PostService]
})

export class PostModule {
   
}
