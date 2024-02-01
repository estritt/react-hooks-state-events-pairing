import React from "react";
import VideoPlayer from "./VideoPlayer.js";
import LikeDislikeBtns from "./LikeDislikeBtns.js";
import Comments from "./Comments.js";
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  const videoPlayerProps = [ video.id, video.title, video.embedUrl, video.views, video.createdAt ];
  const likeDislikeBtnsProps = [ video.upvotes, video.downvotes ];

  return (
    <div className="App">
      <VideoPlayer props={videoPlayerProps}/>
      <LikeDislikeBtns props={likeDislikeBtnsProps} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;