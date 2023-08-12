import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-5">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
