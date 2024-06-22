import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchValue = (q) => {
    setQuery(q);
  };

  const handleSearchButton = () => {
    navigate("results?search_query=" + query);
    setQuery("");
  };
  
  return (
    <div className="p-2 md:p-4 shadow-lg grid grid-flow-col">
      <div className="col-span-1 mt-1">
        <Link to={"/"}>
          <h1 className="hidden md:block font-extrabold text-2xl cursor-pointer">
            NEWSBOARD
          </h1>
        </Link>
      </div>
      <div className="col-span-10 text-center font-semibold px-3 ">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearchValue(e.target.value)}
          className="border bottom-1 border-black w-1/2 rounded-tl-full rounded-bl-full px-3 py-2"
        />
        <button
          className="px-3 py-2 border border-black rounded-tr-full rounded-br-full"
          onClick={handleSearchButton}
        >
          🔎
        </button>
      </div>
      <div className="col-span-1 flex">
        <button className="hidden md:block py-2 px-4 bg-[#f52828] font-semibold text-white rounded-lg ">
          Sign up
        </button>
        <button className="hidden md:block mx-8 font-semibold">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
