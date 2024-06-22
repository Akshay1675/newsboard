import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SidebarNews from "./SidebarNews";

const DetailedNews = () => {
  const news = useSelector((store) => store.news.detailedNews);
  const newsList = useSelector((store) => store.news.newsList);

  const cleanContent = (content) => {
    content = content?.replace(/\[\+\d+ chars\]/, ""); // remove content in front of ...

    return content;
  };

  if (!news) {
    return (
      <div className="text-center font-bold text-2xl text-red-600 mt-6">
        News not found.
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#262626] h-12 flex items-center px-4">
        <Link to={"/"}>
          <button className="text-gray-300 font-bold text-sm md:font-extrabold md:text-lg">
            HOME <span className=" mx-2">/</span>
          </button>
        </Link>
        <p className="hidden md:block font-normal text-base text-white mx-2">
          {news.title}
        </p>
      </div>
      <div className=" py-12 bg-gray-50 md:flex">
        <div className=" mx-8 md:flex ">
          <img
            src={
              news.urlToImage
                ? news.urlToImage
                : "https://th.bing.com/th/id/OIP.zNR8xuXefHscI5YOdxd6BgHaFY?rs=1&pid=ImgDetMain"
            }
            alt={news.title}
            className="w-96 h-[26rem]"
          />
          <div className="md:w-[32rem] md:ml-7">
            <h1 className="font-medium mt-4 md:mt-0 text-2xl md:text-[32px] mb-4">
              {news.title}
            </h1>
            <p className="font-medium text-lg text-gray-700 mb-4">
              {cleanContent(news.content)}
            </p>
            <p className="font-medium text-base mb-4 text-gray-600">
              {news.source.name}{" "}
              <span>{moment(news.publishedAt).fromNow()}</span>
            </p>
            <a
              className="font-medium text-base mb-4 underline cursor-pointer"
              href={news.url}
              target="_blank"
            >
              Read more on {news.source.name}
            </a>
          </div>
        </div>
        <div className="mx-2 md:mx-0">
          <p className="font-bold text-lg">More news</p>
          {newsList?.slice(0, 4).map((n, i) => (
            <SidebarNews key={i} data={n} currentNews={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedNews;
