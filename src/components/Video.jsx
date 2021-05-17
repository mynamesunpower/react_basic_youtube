import React from "react";

const Video = (props) => {
  const { video } = props;

  const handleText = (text) => {
    console.log(`text: ${text}, length: ${text.length}`);
    return text.length > 30 ? `${text.substr(0, 30)}...` : text;
  };

  return (
    <li className='video'>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className='thumbnail'
      />
      <div className='info'>
        {handleText(video.snippet.title)}
        <div className='title'>{video.snippet.channelTitle}</div>
      </div>
    </li>
  );
};

export default Video;
