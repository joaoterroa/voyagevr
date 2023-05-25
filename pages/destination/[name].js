import { useRouter } from "next/router";
import destinations from "../../data/destinations";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
// import CategoryCard from "@/components/CategoryCard";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const OpenStreetMap = dynamic(() => import("@/components/OpenStreetMap"), {
    ssr: false,
});

import { fetchWeatherData } from "../utils";

export default function DestinationPage() {
    const router = useRouter();
    const { name } = router.query;
    const decodedName = decodeURIComponent(name);
    const destination = destinations.find((dest) => dest.name === decodedName);
    const [currentTime, setCurrentTime] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for user's preference in localStorage
        const storedDarkMode = localStorage.getItem("darkMode");
        if (storedDarkMode) {
            setDarkMode(JSON.parse(storedDarkMode));
        } else {
            // Respect user's browser preference for dark mode
            const prefersDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setDarkMode(prefersDarkMode);
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        // Save user's preference in localStorage
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    };

    // Add this function inside the DestinationPage component
    const handleImageClick = (timestamp) => {
        setCurrentTime(timestamp);
    };

    const [activeItemKey, setActiveItemKey] = useState(null);
    const [activeItemValue, setActiveItemValue] = useState(null);

    const handleItemClick = (key, value) => {
        if (activeItemKey === key) {
            setActiveItemKey(null);
            setActiveItemValue(null);
        } else {
            setActiveItemKey(key);
            setActiveItemValue(value);
        }
    };

    const [weatherData, setWeatherData] = useState(null);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        // Fetch weather data when the component mounts
        const fetchWeather = async () => {
            const apiKey = "c294eea6e8141a841129bd80c9a12710";
            const data = await fetchWeatherData(
                destination.latitude,
                destination.longitude,
                apiKey
            );
            setWeatherData(data);
        };

        if (destination) {
            fetchWeather();
        }
    }, [destination]);

    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    if (!destination) {
        return <div>Loading...</div>;
    }

    const { landmarks, culture, cuisine, history, nearbyAttractions } =
        destination;

    const timeStamps = destination.timeStamps;

    return (
        <>
            <Head>
                <title>{destination.name}</title>
            </Head>
            <div
                className={
                    darkMode
                        ? "bg-neutral-900 text-neutral-100 "
                        : "bg-neutral-100 text-neutral-900"
                }
            >
                <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold">VoyageVR</h1>
                            <p className="text-xl">
                                Explore the globe from the comfort of your home
                            </p>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="focus:outline-none"
                        >
                            {darkMode ? (
                                <span className="text-xl">🌞</span>
                            ) : (
                                <span className="text-xl">🌙</span>
                            )}
                        </button>
                    </div>
                </nav>
                <div className="">
                    <div className="container mx-auto p-4 ">
                        <h1 className="text-4xl font-bold mb-4">
                            {destination.name}
                        </h1>
                        <p className="text-xl mb-8">
                            {destination.description}
                        </p>
                        <div className="flex space-x-4 mb-6 gap-4">
                            {/* buttons for social media sharing */}
                            {/* Facebook Share Button */}
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                    currentUrl
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="focus:outline-none"
                            >
                                <button className="inline-flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        class="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </button>
                            </a>

                            {/* Twitter Share Button */}
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                    currentUrl
                                )}&text=Check%20out%20this%20amazing%20virtual%20tour%20of%20${encodeURIComponent(
                                    destination.name
                                )}%20on%20VoyageVR!&hashtags=VoyageVR,VirtualTravel`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="focus:outline-none"
                            >
                                <button className="inline-flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        class="bi bi-twitter"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </button>
                            </a>

                            {/* Email Share Button */}
                            <a
                                href={`mailto:?subject=Check%20out%20this%20amazing%20virtual%20tour%20of%20${encodeURIComponent(
                                    destination.name
                                )}%20on%20VoyageVR!&body=I%20found%20this%20amazing%20virtual%20tour%20of%20${encodeURIComponent(
                                    destination.name
                                )}%20on%20VoyageVR%20and%20thought%20you%20might%20like%20it%20too!%20Here's%20the%20link:%20${encodeURIComponent(
                                    currentUrl
                                )}`}
                                className="focus:outline-none"
                            >
                                <button className="inline-flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        class="bi bi-envelope-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <div className=" mb-4 hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out w-full">
                            <VideoPlayer
                                videoId={destination.introductoryVideo}
                                currentTime={currentTime}
                                onTimeUpdate={(time) => {
                                    // Update the active card based on the current time
                                    if (time >= 80 && time <= 90) {
                                        setActiveCard(0); // highlight the first card
                                    } else {
                                        setActiveCard(null); // no card is highlighted
                                    }
                                }}
                            />
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">
                            Points of Interest
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-4">
                            {destination.images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative overflow-hidden ${
                                        index === activeCard
                                            ? "highlight-class"
                                            : ""
                                    }`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="transform transition duration-500 ease-in-out hover:scale-105">
                                        <Image
                                            src={"/" + image}
                                            alt={`${destination.name} - ${index}`}
                                            className="w-full h-48 object-cover rounded-lg"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl uppercase z-10"
                                        onClick={() =>
                                            handleImageClick(timeStamps[index])
                                        }
                                    >
                                        {destination.landmarks[index]}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4 mt-8">
                                Interactive Map
                            </h2>
                            <OpenStreetMap destination={destination} />
                            {weatherData && (
                                <div className="mb-4">
                                    <h2 className="text-2xl font-semibold mb-4">
                                        Current Weather
                                    </h2>
                                    <p className="capitalize">
                                        {weatherData.weather[0].description} -{" "}
                                        {Math.round(weatherData.main.temp)}°C
                                    </p>
                                </div>
                            )}
                        </motion.div>

                        <h2 className="text-2xl font-semibold mb-4">
                            Categories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4 ">
                            <CategoryCard
                                title="Culture"
                                items={culture}
                                onItemClick={handleItemClick}
                                activeItemKey={activeItemKey}
                            />
                            <CategoryCard
                                title="Cuisine"
                                items={cuisine}
                                onItemClick={handleItemClick}
                                activeItemKey={activeItemKey}
                            />
                            <CategoryCard
                                title="History"
                                items={history}
                                onItemClick={handleItemClick}
                                activeItemKey={activeItemKey}
                            />
                        </div>
                        {activeItemKey && (
                            <div className="border rounded-md p-4">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {activeItemKey}
                                </h3>
                                <div className="text-xl">{activeItemValue}</div>
                            </div>
                        )}
                        {/* span the two images along the width of the div */}
                        <section className="mt-8">
                            <Link href="/">
                                <button
                                    className={`border rounded-md p-4 hover transition duration-200 ease-in-out ${
                                        darkMode
                                            ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
                                            : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                                    }`}
                                >
                                    Back to Home
                                </button>
                            </Link>
                        </section>
                    </div>
                    <footer
                        className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 ${
                            darkMode ? "dark:bg-slate-800" : ""
                        }`}
                    >
                        <div className="container mx-auto px-4">
                            <p className="text-center text-xl">
                                &copy; VoyageVR {new Date().getFullYear()}
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

function CategoryCard({ title, items, onItemClick, activeItemKey }) {
    return (
        <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-4">{title}</h2>
            <ul className="space-y-2 ">
                {Object.keys(items).map((key, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer ${
                            activeItemKey === key ? "font-bold" : ""
                        }`}
                        onClick={() => onItemClick(key, items[key])}
                    >
                        - {key}
                    </li>
                ))}
            </ul>
        </div>
    );
}
