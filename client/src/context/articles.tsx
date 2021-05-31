import axios from "axios";
import { createContext, useState } from "react";
import { Article } from "../types";

interface ArticlesState {
  articles: Article[];
  setArticles: (newValue: Article[]) => void | null;
  fetchAllArticles: () => void | null;
  searchArticles: (searchTerm: string) => void | null;
}
const ArticlesContext = createContext<ArticlesState>({
  articles: [],
  setArticles: null,
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
      console.log(error);
    }
  };
  return (
    <ArticlesContext.Provider
      value={{
        articles,
        setArticles,
        fetchAllArticles,
        searchArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
