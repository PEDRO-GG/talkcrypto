import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Article } from './article.entity';
import { ArticleRepository } from './article.repository';
import { CreateArticleDto } from './dto/create-article.dto';
import { GetArticlesSearchDto } from './dto/get-articles-search.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleRepository)
    private articleRepository: ArticleRepository,
  ) {}

  async getAllArticles(searchDto: GetArticlesSearchDto): Promise<Article[]> {
    return this.articleRepository.getAllArticles(searchDto);
  }

  async getArticlesByUsername(username: string): Promise<any> {
    return this.articleRepository.getArticlesByUsername(username);
  }

  async createArticle(
    createArticleDto: CreateArticleDto,
    user: User,
  ): Promise<Article> {
    return this.articleRepository.createArticle(createArticleDto, user);
  }
}
