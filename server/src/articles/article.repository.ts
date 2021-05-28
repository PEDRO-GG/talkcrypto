import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { GetArticlesSearchDto } from './dto/get-articles-search.dto';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  async getAllArticles(searchDto: GetArticlesSearchDto): Promise<Article[]> {
    const { search } = searchDto;
    const query = this.createQueryBuilder('article');

    if (search) {
      query.andWhere(
        '(article.title LIKE :search OR article.content LIKE :search)',
        { search: `%${search}%` },
      );
    }

    const articles = await query
      .leftJoinAndSelect('article.author', 'user.id')
      .getMany();
    return articles;
  }

  async getArticlesByUsername(username: string): Promise<Article[]> {
    const allArticles = await this.find({ relations: ['author'] }); // joins article and user tables
    const articles = allArticles.filter(
      (article) => article.author.username === username,
    );
    return articles;
  }

  async createArticle(
    createArticleDto: CreateArticleDto,
    user: User,
  ): Promise<Article> {
    const { title, content } = createArticleDto;
    const article = new Article();
    article.title = title;
    article.content = content;
    article.createdOn = new Date();
    article.author = user;
    await article.save();
    return article;
  }
}
