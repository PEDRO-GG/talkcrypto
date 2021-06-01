import { Article } from "../types";

interface SelectedArticleProps {
  article: Article;
}
const SelectedArticle: React.FC<SelectedArticleProps> = ({ article }) => {
  return (
    <div>
      <p>{article.title}</p>
      <p>{article.createdOn}</p>
      <p>{article.author.username}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default SelectedArticle;
