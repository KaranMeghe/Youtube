import { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { generateRandomName } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/slices/chatSlice";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLiveMessage("");
    dispatch(
      addMessage({
        name: "Karan22",
        message: liveMessage,
      })
    );
  };

  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING

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
    <>
      <div className="w-full h-[600px] mx-3 bg-slate-50 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat) => {
          return <Chatmessage chat={chat} key={chat.id} />;
        })}
      </div>

      <form
        className="w-full p-2 mt-2 ml-2 border border-black rounded-lg xl-flex lg:flex-column"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-96 px-2 outline-none border border-t-none  border-b-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100 lg:mt-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
