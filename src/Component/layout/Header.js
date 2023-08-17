import { BsYoutube, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/appSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../../utils/config";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQueries, setSearchQueries] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  console.log(searchQueries);

  // toggling behavior of sidebar
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // Prevent Browser Default Behaviour
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // Get Search Result data
  const getSearchSuggestion = async () => {
    const searchData = await axios.get(YOUTUBE_SEARCH_API + searchQueries);
    setSuggestions(searchData?.data[1]);
    return suggestions;
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    console.log("API CALL :" + searchQueries);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQueries]);

  return (
    <>
      <header className="bg-gray-100 py-4 border-b border-gray-200 fixed top-0 w-full">
        <nav className="flex justify-between items-baseline mt-1 mx-8">
          <div id="logo" className="flex justify-around  w-40">
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => toggleMenuHandler()}
            />

            <div className="flex justify-center items-center">
              <BsYoutube className="text-2xl text-red-600" />
              <h1 className="text-xl">Youtube</h1>
            </div>
          </div>

          <form className="flex align-baseline" onSubmit={handleFormSubmit}>
            <input
              type={"search"}
              className="border-solid border-r-0 border-2 border-gray-400 rounded-l-full py-2 px-16 outline-none sm:w-1/5 md:w-[32rem]"
              placeholder="Search"
              value={searchQueries}
              onChange={(e) => setSearchQueries(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className=" border-solid border-2 border-gray-400 border-l-none rounded-r-full py-3 px-3">
              <BsSearch />
            </button>

            {searchQueries.length >= 1 && showSuggestion ? (
              <ul className="fixed bg-white w-[36%] rounded-md z-40 top-16 mt-2 shadow-lg p-2">
                {suggestions.map((search, index) => {
                  return (
                    <li
                      key={index}
                      className="py-2 shadow-sm hover:bg-gray-200"
                    >
                      🔎 {search}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </form>
          <div id="user">
            <BiUserCircle className="text-2xl" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
