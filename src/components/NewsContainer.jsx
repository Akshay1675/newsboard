import { useState } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";
import useGetNewsData from "../utils/hooks/useGetNewsData";


const NewsContainer = () => {
  
  const { newsList, loading, error } = useGetNewsData()
  const [page, setPage] = useState(1);
  
  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= newsList.length / 5 &&
      selectedPage != page
    )
      setPage(selectedPage);
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
    <>
      <div className="flex flex-wrap mt-4">
        {newsList?.slice(page * 10 - 10, page * 10).map((news, i) => (
          <NewsCard key={i} news={news} />
        ))}
      </div>
      {newsList?.length > 0 && (
        <div className="p-2 my-4  flex justify-center ">
          <span
            className="px-5 py-4 border cursor-pointer"
            onClick={() => selectedPageHandler(page - 1)}
          >
            ◀
          </span>
          {[...Array(Math.ceil(newsList.length / 10))].map((_, i) => {
            return (
              <span
                key={i}
                className={`px-5 py-4 border cursor-pointer ${
                  page === i + 1 ? "bg-[#f52828] text-white" : ""
                }`}
                onClick={() => selectedPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className="px-5 py-4 border cursor-pointer"
            onClick={() => selectedPageHandler(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
};

export default NewsContainer;
