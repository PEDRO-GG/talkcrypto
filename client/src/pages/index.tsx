import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import ArticleContainer from "../components/ArticleContainer";
import { ArticlesContext } from "../context/articles";
import { Article } from "../types";

export default function Home() {
  const { articles } = useContext(ArticlesContext);

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
