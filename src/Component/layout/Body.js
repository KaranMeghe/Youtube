import MainContainer from "./ MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
