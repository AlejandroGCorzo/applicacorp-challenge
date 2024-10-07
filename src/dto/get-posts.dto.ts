import { Transform } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';

export class GetPostsDto {
  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  start: number;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  size: number;
}
