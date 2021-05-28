import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetArticlesSearchDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
