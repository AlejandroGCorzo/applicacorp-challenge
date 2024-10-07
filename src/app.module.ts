import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/validation';
import appConfig from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      validate,
      isGlobal: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
