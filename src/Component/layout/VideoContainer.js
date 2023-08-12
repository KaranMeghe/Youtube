import useGetVideos from "../../hooks/UseGetVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videoList = useGetVideos();
  return (
    <div className="flex flex-wrap my-28">
      {videoList.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard videosInfo={video} key={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
