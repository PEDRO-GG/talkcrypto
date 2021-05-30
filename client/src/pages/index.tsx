import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
import { Article } from "../types";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get("/articles");
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
  }, []);

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
