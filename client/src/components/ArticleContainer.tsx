import { Article } from "../types";
import styles from "../../styles/article.module.css";
import { useRouter } from "next/router";

interface ArticleContainerProps {
  article: Article;
}

const ArticleContainer: React.FC<ArticleContainerProps> = ({ article }) => {
  const router = useRouter();
  return (
    <div className="p-2 my-5 border-b-2 border-gray-400">
      <h2
        onClick={() => router.push(`/${article.id}`)}
        className="text-2xl leading-5 cursor-pointer"
      >
        {article.title}
      </h2>
      <p className="text-lg ">
        By{" "}
        <span
          onClick={() => console.log(article.author.username)}
          className="text-blue-400 cursor-pointer"
        >
          {article.author.username}
        </span>
      </p>
      <p className="font-normal leading-7 truncate max-h-32 ">
        {article.content}
      </p>
      <small>{article.createdOn}</small>
    </div>
  );
};

export default ArticleContainer;
