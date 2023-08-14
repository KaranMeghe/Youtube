const VideoCard = ({ videosInfo }) => {
  console.log(videosInfo, "vi");
  const { snippet, statistics } = videosInfo;
  const {
    channelTitle,
    description,
    localized,
    publishedAt,
    thumbnails,
    title,
  } = snippet;

  const { commentCount, likeCount, viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.high.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{likeCount} likes</li>
      </ul>
    </div>
  );
};

export default VideoCard;
