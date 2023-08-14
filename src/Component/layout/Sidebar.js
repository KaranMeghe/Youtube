import { HiHome, HiVideoCamera } from "react-icons/hi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { LiaDownloadSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Statement
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="flex flex-col align-center mr-2 mt-16 pt-14 bg-white fixed  h-full">
      <div className="p-3 hover:bg-gray-300  duration-300">
        <Link to={"/"}>
          <HiHome className="text-3xl mx-auto " />
          <h4 className="text-xs text-center font-semibold">Home</h4>
        </Link>
      </div>

      <div className="p-3 hover:bg-gray-300 duration-300">
        <HiVideoCamera className="text-3xl mx-auto" />
        <h5 className="text-xs text-center font-semibold">Shorts</h5>
      </div>

      <div className="p-3 hover:bg-gray-300 duration-300">
        <MdOutlineSubscriptions className="text-3xl mx-auto" />
        <h4 className="text-xs text-center font-semibold">Subscriptions</h4>
      </div>

      <div className="p-3 hover:bg-gray-300 duration-300">
        <SiYoutubemusic className="text-3xl mx-auto" />
        <h4 className="text-xs text-center font-semibold">Youtube Music</h4>
      </div>

      <div className="p-3 hover:bg-gray-300 duration-300">
        <LiaDownloadSolid className="text-3xl mx-auto" />
        <h4 className="text-xs text-center font-semibold">Downloads</h4>
      </div>
    </div>
  );
};

export default Sidebar;
