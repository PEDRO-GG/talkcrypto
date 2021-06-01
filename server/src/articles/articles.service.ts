import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getArticleById(id: number): Promise<Article> {
    const found = await this.articleRepository.findOne({
      where: { id: id },
      relations: ['author'],
    });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  async createArticle(
    createArticleDto: CreateArticleDto,
    user: User,
  ): Promise<Article> {
    return this.articleRepository.createArticle(createArticleDto, user);
  }
}
