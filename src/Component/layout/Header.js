import { BsYoutube, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-baseline mt-1 mx-2">
        <div id="logo" className="flex justify-around  w-40">
          <GiHamburgerMenu className="text-2xl" />
          <div className="flex justify-center items-center">
            <BsYoutube className="text-2xl text-red-600" />
            <h1 className="text-xl">Youtube</h1>
          </div>
        </div>

        <form className="flex align-baseline">
          <input
            type={"search"}
            className="border-solid border-r-0 border-2 border-neutral-950 rounded-l-full py-2 px-16 outline-none"
            placeholder="Search"
          />
          <button className="rounded-r-full border-solid border-2 border-neutral-950 border-l-none py-3 px-3">
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
