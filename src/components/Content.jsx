import React from "react";
import Video from "./Video";

const Content = (props) => {
  const { videos } = props;

  return (
    <ul className='videos'>
      {videos.map((video) => {
        return <Video key={video.id} video={video} />;
      })}
    </ul>
  );
};

export default Content;
