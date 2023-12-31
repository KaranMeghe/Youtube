import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import useGetVideos from "../../hooks/UseGetVideos";
import CommentsContainer from "../comment/CommentsContainer";
import LiveChat from "../live chat/LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams(); // custom hook

  const videoList = useGetVideos(); // getting videoList

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" ml-10 mt-24 flex flex-col w-full ">
      <div className="flex w-full">
        <div>
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>

          {videoList.map((video) => {
            if (video.id === searchParam.get("v")) {
              return (
                <div key={video.id}>
                  <h3 className="text-2xl">{video?.snippet?.title}</h3>
                  <h4 className="text-xl">{video?.snippet?.channelTitle}</h4>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
