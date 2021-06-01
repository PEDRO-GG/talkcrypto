import { useRouter } from "next/router";
import { useContext } from "react";
import { ArticlesContext } from "../context/articles";
const Article = () => {
  const { selectedArticle, fetchArticleById } = useContext(ArticlesContext);
  const router = useRouter();
  const { id } = router.query;
  fetchArticleById(Number(id));
  if (!selectedArticle) return <p>Loading...</p>;
  return (
    <div>
      <p>{selectedArticle.title}</p>
      <p>{selectedArticle.createdOn}</p>
      <p>{selectedArticle.author.username}</p>
      <p>{selectedArticle.content}</p>
    </div>
  );
};

export default Article;
