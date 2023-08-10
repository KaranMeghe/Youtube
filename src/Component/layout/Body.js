import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex mt-5">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
