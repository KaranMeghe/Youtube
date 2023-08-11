import useGetVideos from "../../hooks/UseGetVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videoList = useGetVideos();
  return (
    <div className="flex flex-wrap my-28">
      {videoList.map((video) => {
        return <VideoCard videosInfo={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
