import React, { useEffect, useState } from "react";
import "./app.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYLwZhbQLLJp-HevTr2a7lJS1OEM0WsqI",
      {
        method: "GET",
        redirect: "follow",
      },
    )
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setVideos(data.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Navbar />
      <Content videos={videos} />
    </>
  );
}

export default App;
