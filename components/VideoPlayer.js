import { useEffect, useRef } from "react";
import Script from "next/script";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, currentTime, onTimeUpdate }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTime);
    }
  }, [currentTime]);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  return (
    <>
      <Script src="https://www.youtube.com/player_api" strategy="lazyOnload" />
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          // height: "100%",
          playerVars: {
            autoplay: 1,
            // Set playerVars as needed (e.g. autoplay, mute, etc.)
          },
        }}
        onReady={onReady}
        onTimeUpdate={(e) => {
          if (props.onTimeUpdate) {
            props.onTimeUpdate(e.target.currentTime);
          }
        }}
      />
    </>
  );
};
export default VideoPlayer;
