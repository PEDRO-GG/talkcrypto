import { Article } from "../types";
import styles from "../../styles/article.module.css";

interface ArticleContainerProps {
  article: Article;
}
const ArticleContainer: React.FC<ArticleContainerProps> = ({ article }) => {
  return (
    <div className="p-2 my-5 border-b-2 border-gray-400">
      <h2 className="text-2xl leading-5">{article.title}</h2>
      <p className="text-lg ">
        By <span className="text-blue-400">{article.author.username}</span>
      </p>
      <p className="font-normal leading-7 truncate max-h-32 ">
        {article.content}
      </p>
      <small>{article.createdOn}</small>
    </div>
  );
};

export default ArticleContainer;
