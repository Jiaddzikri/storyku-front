import { useCallback, useEffect, useState } from "react";
import { search } from "../api/api";

const SearchInput = ({ setLoading, setStories }) => {
  const [searchKeyword, setSearchKeyword] = useState({ keyword: "" });

  const searchKeywordHandler = (e) => {
    const { value } = e.target;
    setSearchKeyword((prev) => {
      return {
        ...prev,
        keyword: value,
      };
    });
  };

  const searchStories = useCallback(async () => {
    setLoading(true);

    try {
      const response = await search(searchKeyword.keyword);

      if(response.status === 200)  setStories(response.data.data);
    } catch (error) {
      setStories([]);
    } finally {
      setLoading(false);
    }
  }, [searchKeyword.keyword]);

  useEffect(() => {
    if (searchKeyword.keyword == null || searchKeyword.keyword == "") return;

    const timer = setTimeout(() => searchStories(), 500);

    return () => clearTimeout(timer);
  }, [searchStories]);
  return (
    <div className="relative">
      <input
        onChange={searchKeywordHandler}
        type="search"
        id="default-search"
        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
        placeholder="Search Mockups, Logos..."
        required
      />
      <div className="absolute right-5 bottom-3 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
export default SearchInput;
