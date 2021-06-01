import Head from "next/head";
import { useContext } from "react";
import ArticleContainer from "../components/ArticleContainer";
import { ArticlesContext } from "../context/articles";

export default function Home() {
  const { articles } = useContext(ArticlesContext);
  if (!articles) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Talk Crypto</title>
      </Head>
      {articles.map((article) => (
        <ArticleContainer key={article.id} article={article} />
      ))}
    </>
  );
}
