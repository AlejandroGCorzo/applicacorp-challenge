import { Controller, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetPostsDto } from '../dto/get-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts(@Query() query: GetPostsDto) {
    return this.postsService.getPosts(query.start, query.size);
  }
}
