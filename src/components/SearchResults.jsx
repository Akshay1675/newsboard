import { Link, useSearchParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { setDetailedNews } from "../utils/redux/newsSlice";
import { useDispatch } from "react-redux";
import NewsCard from "./NewsCard";
import useGetSearchResults from "../utils/hooks/useGetSearchResults";

const SearchResults = () => {
  const dispatch = useDispatch();
  const [search] = useSearchParams();
  const query = search.get("search_query");

  const { searchResults, loading, error } = useGetSearchResults(query);

  const handleClick = (news) => {
    dispatch(setDetailedNews(news));
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="text-center font-bold text-2xl text-red-600 mt-6">
        {error} 
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mt-4">
      {searchResults?.map((news, i) => (
        <Link
          key={i}
          to={`/news/${encodeURIComponent(news.title)}`}
          onClick={() => handleClick(news)}
        >
          <NewsCard news={news} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
