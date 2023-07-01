import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, currentTime, onTimeUpdate }) => {
    const playerRef = useRef(null);
    const [currentTimestamp, setCurrentTimestamp] = useState(0);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.seekTo(currentTime);
        }
    }, [currentTime]);

    const onReady = (event) => {
        playerRef.current = event.target;
        startTimestampUpdates();
    };

    const startTimestampUpdates = () => {
        const interval = setInterval(() => {
            const timestamp = playerRef.current.getCurrentTime();
            setCurrentTimestamp(timestamp);
            if (onTimeUpdate) {
                onTimeUpdate(timestamp);
            }
        }, 1000); // Update timestamp every 1 second

        return () => {
            clearInterval(interval);
        };
    };

    return (
        <>
            <Script
                src="https://www.youtube.com/player_api"
                strategy="lazyOnload"
            />
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
            />
        </>
    );
};

export default VideoPlayer;
