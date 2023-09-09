import { BiUserCircle } from "react-icons/bi";

const Chatmessage = ({ chat }) => {
  return (
    <div className="flex align-baseline  shadow-sm p-2">
      <BiUserCircle className="text-xl mx-1" />
      <span className="font-bold">{chat.name}</span>
      <span className="text-md"> : {chat.message}</span>
    </div>
  );
};

export default Chatmessage;
