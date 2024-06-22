import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../utils/redux/appSlice";
import { buttons } from "../utils/constants";

const ButtonList = () => {
  
  const category = useSelector((store) => store.app.category);
  const dispatch = useDispatch();
  const handleClick = (b) => {
    dispatch(changeCategory(b.toLowerCase()));
  };

  return (
    <div className="mt-20 ">
      <ul className="flex flex-wrap md:flex-nowrap mx-4 border-b border-b-gray-100 pb-4">
        {buttons.map((button, i) => (
          <li
            key={i}
            className={`md:mx-12 mx-6 mb-2 md:mb-0 cursor-pointer text-lg font-extrabold ${
              category === button.toLocaleLowerCase() ? "text-[#161616]" : "text-[#747474]"
            }  hover:text-[#161616]`}
            onClick={() => handleClick(button)}
          >
            {button}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
