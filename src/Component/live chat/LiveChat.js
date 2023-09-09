import { useEffect } from "react";
import Chatmessage from "./Chatmessage";
import { LIVECHAT_DATA } from "../../utils/config";
import { generateRandomName } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/slices/chatSlice";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  console.log(...LIVECHAT_DATA);

  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      console.log("API POLLING AFTER 2s");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Kane and Undertaker is coming to Raw.",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[600px] mx-3 bg-slate-50 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat) => {
        return <Chatmessage chat={chat} key={chat.id} />;
      })}
    </div>
  );
};

export default LiveChat;
