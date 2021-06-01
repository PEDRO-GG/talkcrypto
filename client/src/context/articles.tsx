import axios from "axios";
import { createContext, useState } from "react";
import { Article } from "../types";

interface ArticlesState {
  articles: Article[];
  selectedArticle: Article;
  fetchAllArticles: () => void;
  fetchArticleById: (id: number) => void;
  searchArticles: (searchTerm: string) => void;
}
export const ArticlesContext = createContext<ArticlesState>({
  articles: null,
  selectedArticle: null,
  fetchAllArticles: null,
  fetchArticleById: null,
  searchArticles: null,
});

export const ArticlesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [articles, setArticles] = useState<Article[]>();
  const [selectedArticle, setSelectedArticle] = useState<Article>();

  const fetchAllArticles = async () => {
    try {
      const res = await axios.get("/articles");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchArticles = async (searchTerm: string) => {
    try {
      const res = await axios.get("/articles", {
        params: { search: searchTerm },
      });
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArticleById = async (id: number) => {
    try {
      const res = await axios.get(`/articles/${id}`);
      setSelectedArticle(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ArticlesContext.Provider
      value={{
        articles,
        selectedArticle,
        fetchAllArticles,
        fetchArticleById,
        searchArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
