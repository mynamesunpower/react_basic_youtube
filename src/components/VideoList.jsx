import React from "react";

const VideoList = ({ videos }) => {
  console.log(videos);
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>{video.snippet.title}</li>
      ))}
    </ul>
  );
};

export default VideoList;
