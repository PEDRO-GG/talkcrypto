import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../context/articles";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchArticles, fetchAllArticles } = useContext(ArticlesContext);

  useEffect(() => {
    if (searchTerm === "") {
      fetchAllArticles();
    } else {
      searchArticles(searchTerm);
    }
  }, [searchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="search"
      className="p-4 font-light leading-tight placeholder-gray-600 border border-gray-500 appearance-none focus:placeholder-gray-400 md:w-80 focus:outline-none"
    />
  );
};

export default SearchBar;
