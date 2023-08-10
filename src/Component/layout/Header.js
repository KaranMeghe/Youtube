import { BsYoutube, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="bg-gray-100 py-3 border-b border-gray-200">
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

        <form className="flex align-baseline">
          <input
            type={"search"}
            className="border-solid border-r-0 border-2 border-gray-400 rounded-l-full py-2 px-16 outline-none sm:w-1/5 md:w-[32rem]"
            placeholder="Search"
          />
          <button className=" border-solid border-2 border-gray-400 border-l-none rounded-r-full py-3 px-3">
            <BsSearch />
          </button>
        </form>

        <div id="user">
          <BiUserCircle className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
