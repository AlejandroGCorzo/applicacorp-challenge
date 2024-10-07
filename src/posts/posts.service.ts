import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostsService {
  private readonly POSTS_URL: string;
  private readonly USERS_URL: string;
  private readonly COMMENTS_URL: string;

  constructor(private configService: ConfigService) {
    // Obtenemos las variables de entorno
    this.POSTS_URL = this.configService.get<string>('POSTS_URL');
    this.USERS_URL = this.configService.get<string>('USERS_URL');
    this.COMMENTS_URL = this.configService.get<string>('COMMENTS_URL');
  }

  async getPosts(start: number, size: number) {
    try {
      // Obtenemos todos los posts
      const postsResponse = await axios.get(this.POSTS_URL);
      const allPosts = postsResponse.data;

      // Verificamos que haya posts para paginar
      if (start >= allPosts.length) {
        throw new HttpException('', HttpStatus.NOT_FOUND);
      }

      // Paginamos los posts
      const paginatedPosts = allPosts.slice(start, start + size);

      // Obtenemos la información de los usuarios
      const usersResponse = await axios.get(this.USERS_URL);
      const users = usersResponse.data;

      // Completamos la información de los posts con la información de los usuarios y de los comentarios
      const fullInformationPosts = await Promise.all(
        paginatedPosts.map(async (post: { userId: any; id: any }) => {
          const user = users.find((u: { id: any }) => u.id === post.userId);
          const commentsResponse = await axios.get(
            `${this.COMMENTS_URL}/${post.id}/comments`,
          );
          const comments = commentsResponse.data || [];

          return {
            ...post,
            user,
            comments,
          };
        }),
      );

      return fullInformationPosts;
    } catch (error) {
      // Detectamos errores 404 y damos la excepción adecuada
      if (error.status === 404) {
        throw new HttpException(
          'No blog results for the specified pagination parameters',
          HttpStatus.NOT_FOUND,
        );
      }

      // Para otros errores, devolvemos error de servidor interno
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
