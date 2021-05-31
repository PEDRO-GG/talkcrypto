import { createContext, useState } from "react";
import { Article } from "../types";

interface ArticlesState {
  articles: Article[];
  setArticles: (newValue: Article[]) => void | null;
}
const ArticlesContext = createContext<ArticlesState>({
  articles: [],
  setArticles: null,
});

export const ArticlesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};
