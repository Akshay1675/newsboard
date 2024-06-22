import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToNewsList } from "../redux/newsSlice";

const useGetNewsData = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const category = useSelector((store) => store.app.category);

  useEffect(() => {
    getNewsData();
  }, [category]);

  const getNewsData = async () => {
    try {
      setLoading(true);
      
      const data = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
      const json = await data.json();
      setNewsList(json?.articles);
      dispatch(addToNewsList(json?.articles));
      setLoading(false);
      setError("");
    } catch (error) {
      setError("Failed to fetch news. Try again after some time.");
      setLoading(false);
    }
  };

  return {newsList, loading, error}
};

export default useGetNewsData;
