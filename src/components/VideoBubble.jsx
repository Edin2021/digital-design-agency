import { useEffect, useRef } from "react";
import videoWebm from "../videos/video.webm";
import videoMp4 from "../videos/video.mp4";

function VideoBubble() {
  const videoBubbleRef = useRef(null);

  useEffect(() => {});

  return (
    <div ref={videoBubbleRef} className="video-bubble-wrapper">
      <div className="video-inner-shadow"></div>
      <video autoPlay loop muted>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default VideoBubble;
