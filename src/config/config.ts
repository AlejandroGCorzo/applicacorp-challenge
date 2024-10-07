import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  postsUrl: process.env.POSTS_URL,
  usersUrl: process.env.USERS_URL,
  commentsUrl: process.env.COMMENTS_URL,
}));
