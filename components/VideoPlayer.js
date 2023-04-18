import Script from "next/script";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
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
      />
    </>
  );
};

export default VideoPlayer;
