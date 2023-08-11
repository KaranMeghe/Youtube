import axios from "axios";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";

const useGetVideos = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videoData = await axios.get(YOUTUBE_VIDEO_API);
    setVideoList(videoData?.data?.items);
  };
  return videoList;
};

export default useGetVideos;
