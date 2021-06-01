import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ArticlesContext } from "../context/articles";
const Article = () => {
  const { selectedArticle, fetchArticleById } = useContext(ArticlesContext);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    fetchArticleById(Number(id));
  }, [router.isReady]);

  if (!selectedArticle) return <p>Loading...</p>;
  return (
    <article className="p-2 my-5 ">
      <h2 className="text-2xl leading-5 cursor-pointer">
        {selectedArticle.title}
      </h2>
      <p className="text-lg ">
        By{" "}
        <span className="text-blue-400 cursor-pointer">
          {selectedArticle.author.username}
        </span>
      </p>
      <small>{selectedArticle.createdOn}</small>
      <p className="mt-5 font-normal leading-7 break-words">
        {selectedArticle.content}
      </p>
    </article>
  );
};

export default Article;
