import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ArticlesContext } from "../../context/articles";
import ArticleContainer from "../../components/ArticleContainer";
const Article = () => {
  const { selectedUser, fetchAllArticlesOfUser } = useContext(ArticlesContext);

  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    fetchAllArticlesOfUser(String(username));
  }, [router.isReady]);

  if (!selectedUser) return <p>Loading...</p>;
  return (
    <article className="p-2 my-5 ">
      <button
        className="px-4 py-2 my-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-400"
        onClick={() => router.push("/")}
      >
        All Articles
      </button>

      <p className="text-xl font-bold">
        Articles written by: {selectedUser.username}
      </p>
      <ul>
        {selectedUser.articles.map((article) => (
          <div key={article.id} className="p-2 my-5 border-b-2 border-gray-400">
            <h2
              onClick={() => router.push(`/articles/${article.id}`)}
              className="text-2xl leading-5 cursor-pointer"
            >
              {article.title}
            </h2>
            <p className="text-lg ">
              By{" "}
              <span
                onClick={() => router.push(`/users/${selectedUser.username}`)}
                className="text-blue-400 cursor-pointer"
              >
                {selectedUser.username}
              </span>
            </p>
            <p className="font-normal leading-7 truncate max-h-32 ">
              {article.content}
            </p>
            <small>{article.createdOn}</small>
          </div>
        ))}
      </ul>
    </article>
  );
};

export default Article;
