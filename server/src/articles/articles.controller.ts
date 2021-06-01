import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { GetArticlesSearchDto } from './dto/get-articles-search.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articleServices: ArticlesService) {}

  // Get every article in the DB
  @Get()
  getAllArticles(
    @Query(ValidationPipe) searchDto: GetArticlesSearchDto,
  ): Promise<Article[]> {
    return this.articleServices.getAllArticles(searchDto);
  }

  // Get an articles by id
  @Get('/:id')
  getArticleById(@Param('id', ParseIntPipe) id: number): Promise<Article> {
    return this.articleServices.getArticleById(id);
  }

  // Create an article, provided a token is given
  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  createArticle(
    @Body() createArticleDto: CreateArticleDto,
    @GetUser() user: User,
  ): Promise<Article> {
    return this.articleServices.createArticle(createArticleDto, user);
  }

  // deleteArticle

  //updateArticle
}
