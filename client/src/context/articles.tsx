import axios from "axios";
import { createContext, useState } from "react";
import { Article } from "../types";

interface ArticlesState {
  articles: Article[];
  fetchAllArticles: () => void | null;
  searchArticles: (searchTerm: string) => void | null;
}
export const ArticlesContext = createContext<ArticlesState>({
  articles: [],
  fetchAllArticles: null,
  searchArticles: null,
});

export const ArticlesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
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
      console.log("here");
    }
  };
  return (
    <ArticlesContext.Provider
      value={{
        articles,
        fetchAllArticles,
        searchArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
