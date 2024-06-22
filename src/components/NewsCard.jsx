import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDetailedNews } from "../utils/redux/newsSlice";
import { defaultThumbnail } from "../utils/constants";

const NewsCard = ({ news }) => {
  const dispatch = useDispatch();

  const handleViewClick = (news) => {
    dispatch(setDetailedNews(news));
  };

  if (news.title === "[Removed]" && news.description === "[Removed]") {
    return null;
  }
  
  return (
    <div className="md:w-[25rem] h-[40rem] border-2 flex flex-col border-gray-200 rounded-lg p-4 mx-6 my-4">
      <h2 className="text-base mb-2 font-semibold">
        {news.author ? news.author : "NEWSBOARD"}
      </h2>
      <img
        src={news.urlToImage ? news.urlToImage : defaultThumbnail}
        alt={news.title}
        className="w-[22rem] h-72 rounded-lg"
      />
      <p className="my-2 font-semibold text-gray-400">
        {moment(news.publishedAt).fromNow()}
      </p>
      <h1 className="font-medium text-2xl mt-1">{news.title}</h1>
      <p className="font-normal text-base text-gray-600 mt-4">
        {news.description?.slice(0, 100)}
      </p>
      <div className="flex items-end mt-auto">
        <Link to={`/news/${encodeURIComponent(news.title)}`}>
          <p
            className="font-semibold text-base text-[#f52828]"
            onClick={() => handleViewClick(news)}
          >
            View
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
