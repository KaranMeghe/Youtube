import { BiUserCircle } from "react-icons/bi";

const Chatmessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex align-baseline shadow-sm p-2">
        <BiUserCircle className="text-2xl mx-1" />
        <span className="font-bold">{name}</span>
        <span>: {message}</span>
      </div>
    </div>
  );
};

export default Chatmessage;
