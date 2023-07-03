import { useRouter } from "next/router";
import destinations from "../../data/destinations";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
// import CategoryCard from "@/components/CategoryCard";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PointOfInterestCard from "@/components/PointOfInterestCard";
import styles from "@/styles/DestinationPage.module.css";
// import { fetchWeatherData } from "../utils";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
import ReactResizeDetector from "react-resize-detector";

// const OpenStreetMap = dynamic(() => import("@/components/OpenStreetMap"), {
//     ssr: false,
// });

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function DestinationPage() {
    const router = useRouter();
    const { name } = router.query;
    const decodedName = decodeURIComponent(name);
    const destination = destinations.find((dest) => dest.name === decodedName);
    const [currentTime, setCurrentTime] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState("Monuments");
    const [activeParagraphFood, setActiveParagraphFood] = useState(null);
    const [activeParagraphHistory, setActiveParagraphHistory] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [tableOfContents, setTableOfContents] = useState({
        "Cover Page": {
            page: 1,
        },
        "Table of Contents": {
            page: 2,
        },
        "Your guide to Lisbon": {
            page: 3,
            subsections: {
                "Lisbon Description": {
                    page: 4,
                },
            },
        },
        "Know about Lisbon": {
            page: 5,
            subsections: {
                "Lisbon Districts": {
                    page: 6,
                },
            },
        },
        "Public Transport": {
            page: 7,
        },
        "Going Out": {
            page: 9,
            subsections: {
                "Food & Drinks": {
                    page: 10,
                },
                "Rooftops & Bars": {
                    page: 11,
                },
                "Clubs & Nightclubs": {
                    page: 12,
                },
            },
        },
        "Lisbon Museums": {
            page: 13,
        },
        "Lisbon Monuments": {
            page: 14,
        },
        "Lisbon Tours": {
            page: 15,
        },
        "Contact Information": {
            page: 16,
        },
    });
    const [scale, setScale] = useState(1);
    const [activeSection, setActiveSection] = useState(null);
    const [activeSubsection, setActiveSubsection] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = 1.57 * window.innerWidth;
            const newScale = windowWidth / 2000;

            setScale(newScale);
        };

        window.addEventListener("resize", handleResize);

        // Call the function to set the initial scale.
        handleResize();

        return () => {
            // Clean up the event listener when the component unmounts.
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

    // Function to navigate to the next page
    const nextPage = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to navigate to the previous page
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // const [weatherData, setWeatherData] = useState(null);
    const [highlightMonCard, setHighlightMonCard] = useState(null);
    const [highlightFoodCard, setHighlightFoodCard] = useState(null);

    const updateCard = (timestamp) => {
        // Monuments
        if (timestamp >= 46 && timestamp < 96) {
            setHighlightMonCard(0);
        } else if (timestamp >= 97 && timestamp < 157) {
            setHighlightMonCard(1);
        } else if (timestamp >= 158 && timestamp < 186) {
            setHighlightMonCard(2);
        } else if (timestamp >= 187 && timestamp < 215) {
            setHighlightMonCard(3);
        } else {
            setHighlightMonCard(null);
        }

        // Food
        if (timestamp >= 246 && timestamp < 287) {
            setHighlightFoodCard(0);
        } else if (timestamp >= 288 && timestamp < 325) {
            setHighlightFoodCard(1);
        } else if (timestamp >= 326 && timestamp < 362) {
            setHighlightFoodCard(2);
        } else if (timestamp >= 363 && timestamp < 398) {
            setHighlightFoodCard(3);
        } else {
            setHighlightFoodCard(null);
        }
    };

    // useEffect(() => {
    //     // Fetch weather data when the component mounts
    //     const fetchWeather = async () => {
    //         const apiKey = "";
    //         const data = await fetchWeatherData(
    //             destination.latitude,
    //             destination.longitude,
    //             apiKey
    //         );
    //         setWeatherData(data);
    //     };

    //     if (destination) {
    //         fetchWeather();
    //     }
    // }, [destination]);

    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    if (!destination) {
        return <div>Loading...</div>;
    }

    const {
        landmarks,
        culture,
        cuisine,
        history,
        nearbyAttractions,
        intervals,
    } = destination;

    const timeStamps = destination.timeStamps;

    const timeStampsCuisine = destination.timeStampsCuisine;

    const isVideoTab = ["Monuments", "Food"].includes(activeTab);

    return (
        <>
            <Head>
                <title>{destination.name}</title>
            </Head>
            <div
                className={`${
                    darkMode
                        ? "bg-neutral-900 text-neutral-100"
                        : "bg-neutral-100 text-neutral-900"
                }`}
                style={{ minHeight: "100vh" }}
            >
                <motion.nav
                    className="bg-no-repeat bg-center bg-cover flex items-center py-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("https://unsplash.com/photos/LErQct1aBD4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGxpc2JvbnxlbnwwfDB8fHwxNjg3OTczMTA5fDA&force=true")`,
                    }}
                >
                    <div className="container mx-auto px-4 flex justify-between">
                        <div>
                            <h1 className="text-5xl font-bold text-white">
                                {destination.name}
                            </h1>
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
                </motion.nav>
                <motion.nav className="py-6">
                    <div
                        className="container mx-auto px-4"
                        // style={{ maxHeight: "670px" }}
                    >
                        <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
                            {["Monuments", "Food", "History", "About"].map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        className={`${styles.tab} ${
                                            activeTab === tab && styles.active
                                        } ${
                                            darkMode
                                                ? "text-white hover:bg-neutral-700"
                                                : "text-black hover:bg-neutral-300 hover:text-black"
                                        }`}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            if (tab === "Food") {
                                                setHighlightMonCard(null);
                                            } else if (tab === "Monuments") {
                                                setHighlightFoodCard(null);
                                            }
                                        }}
                                    >
                                        {tab}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </motion.nav>

                <div className="">
                    <main className="container mx-auto p-4">
                        <div className="flex flex-col md:flex-row md:space-x-4 gap-24 flex-row items-center mb-4">
                            <div
                                className={
                                    isVideoTab ? "transform w-1/2" : "hidden"
                                }
                            >
                                <VideoPlayer
                                    videoId={destination.introductoryVideo}
                                    currentTime={currentTime}
                                    onTimeUpdate={updateCard}
                                />
                            </div>

                            {isVideoTab && (
                                <div className="w-1/2 overflow-hidden">
                                    {activeTab === "Monuments" && (
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                {destination.images.map(
                                                    (image, index) => (
                                                        <PointOfInterestCard
                                                            key={index}
                                                            image={image}
                                                            name={
                                                                destination
                                                                    .landmarks[
                                                                    index
                                                                ]
                                                            }
                                                            index={index}
                                                            onClick={() =>
                                                                handleImageClick(
                                                                    timeStamps[
                                                                        index
                                                                    ]
                                                                )
                                                            }
                                                            highlightMonCard={
                                                                highlightMonCard
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}

                                    {activeTab === "Food" && (
                                        <>
                                            {/* <p className="text-center text-2xl font-semibold mb-4">
                                                Cuisine
                                            </p> */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 center">
                                                {destination.imagesCuisine.map(
                                                    (image, index) => {
                                                        // const isHighlighted =
                                                        //     highlightCard ===
                                                        //     index;
                                                        const cuisineName =
                                                            Object.keys(
                                                                cuisine
                                                            )[index];
                                                        const cuisineDescription =
                                                            cuisine[
                                                                cuisineName
                                                            ];

                                                        return (
                                                            <PointOfInterestCard
                                                                key={index}
                                                                image={image}
                                                                name={
                                                                    destination
                                                                        .landmarksCuisine[
                                                                        index
                                                                    ]
                                                                }
                                                                index={index}
                                                                onClick={() => {
                                                                    handleImageClick(
                                                                        timeStampsCuisine[
                                                                            index
                                                                        ]
                                                                    );
                                                                    if (
                                                                        activeParagraphFood ===
                                                                        cuisineDescription
                                                                    ) {
                                                                        setActiveParagraphFood(
                                                                            null
                                                                        );
                                                                    } else {
                                                                        setActiveParagraphFood(
                                                                            cuisineDescription
                                                                        );
                                                                    }
                                                                }}
                                                                highlightFoodCard={
                                                                    highlightFoodCard
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {activeTab === "Food" &&
                            activeParagraphFood !== null && (
                                <div
                                    className="w-full"
                                    style={{
                                        maxHeight: "144px",
                                        overflowY: "auto",
                                    }}
                                >
                                    <p className="text-lg mt-8">
                                        {activeParagraphFood}
                                    </p>
                                </div>
                            )}
                        {activeTab === "History" && (
                            <div className="md:grid md:grid-cols-2 md:gap-8 gap-4 grid-cols-1">
                                <div>
                                    {activeImage === null ? (
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:mb-0 mb-4"
                                            style={{
                                                maxHeight: "548px",
                                                overflowY: "auto",
                                                // scrollbarWidth: "none",
                                            }}
                                        >
                                            {destination.imagesHistory.map(
                                                (image, index) => {
                                                    const historyName =
                                                        Object.keys(history)[
                                                            index
                                                        ];
                                                    const historyDescription =
                                                        history[historyName];

                                                    return (
                                                        <PointOfInterestCard
                                                            key={index}
                                                            image={image}
                                                            name={
                                                                destination
                                                                    .landmarksHistory[
                                                                    index
                                                                ]
                                                            }
                                                            index={index}
                                                            onClick={() => {
                                                                if (
                                                                    activeImage !==
                                                                        null &&
                                                                    activeImage.index ===
                                                                        index
                                                                ) {
                                                                    setActiveImage(
                                                                        null
                                                                    );
                                                                } else {
                                                                    setActiveImage(
                                                                        {
                                                                            image,
                                                                            name: destination
                                                                                .landmarksHistory[
                                                                                index
                                                                            ],
                                                                            description:
                                                                                historyDescription,
                                                                            index,
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex justify-center items-center mb-4">
                                            <img
                                                src={"/" + activeImage.image}
                                                alt={activeImage.name}
                                                className="w-full h-full object-cover"
                                                onClick={() =>
                                                    setActiveImage(null)
                                                }
                                                height={548}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {activeImage !== null ? (
                                        <div
                                            className="w-full"
                                            style={{
                                                maxHeight: "548px",
                                                overflowY: "auto",
                                            }}
                                        >
                                            <h1
                                                className="text-6xl mb-4 font-bold"
                                                style={{
                                                    letterSpacing: "0.025rem",
                                                }}
                                            >
                                                {activeImage.name}
                                            </h1>
                                            <p className="text-lg mb-16">
                                                {activeImage.description}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    setActiveImage(null)
                                                }
                                                // className="mr-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                                                className="px-4 py-2 font-bold hover:text-blue-500"
                                            >
                                                ←&nbsp;&nbsp; Go Back
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="w-full">
                                            <p className="text-lg">
                                                Click on the images to learn
                                                more about the history of the
                                                city.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === "About" && (
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/4 pr-4 w-full mb-4 lg:mb-0  lg:text-left">
                                    <p className="text-3xl font-bold mb-4 text-center sm:text-left">
                                        Table of Contents
                                    </p>
                                    <ul className="list-decimal list-inside">
                                        {Object.entries(tableOfContents).map(
                                            ([section, content], index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <li
                                                            className={`mb-2 hover:text-neutral-500 text-lg  ${
                                                                activeSection ===
                                                                section
                                                                    ? "text-blue-500 underline"
                                                                    : ""
                                                            } `}
                                                        >
                                                            <button
                                                                className={`text-left hover:text-neutral-500  ${
                                                                    activeSection ===
                                                                    section
                                                                        ? "text-blue-500 underline"
                                                                        : ""
                                                                } `}
                                                                onClick={() => {
                                                                    setCurrentPage(
                                                                        content.page
                                                                    );
                                                                    setActiveSection(
                                                                        section
                                                                    );
                                                                    setActiveSubsection(
                                                                        null
                                                                    );
                                                                }}
                                                            >
                                                                {section}
                                                            </button>
                                                        </li>
                                                        {content.subsections &&
                                                            Object.entries(
                                                                content.subsections
                                                            ).map(
                                                                (
                                                                    [
                                                                        subsection,
                                                                        pageInfo,
                                                                    ],
                                                                    subIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            subIndex
                                                                        }
                                                                        className={`mb-2 pl-4 hover:text-neutral-500 text-lg  ${
                                                                            activeSubsection ===
                                                                            subsection
                                                                                ? "text-blue-500 underline"
                                                                                : ""
                                                                        } `}
                                                                    >
                                                                        <button
                                                                            className={`text-left hover:text-neutral-500  ${
                                                                                activeSubsection ===
                                                                                subsection
                                                                                    ? "text-blue-500 underline"
                                                                                    : ""
                                                                            } `}
                                                                            onClick={() => {
                                                                                setCurrentPage(
                                                                                    pageInfo.page
                                                                                );
                                                                                setActiveSection(
                                                                                    null
                                                                                );
                                                                                setActiveSubsection(
                                                                                    subsection
                                                                                );
                                                                            }}
                                                                        >
                                                                            {
                                                                                subsection
                                                                            }
                                                                        </button>
                                                                    </li>
                                                                )
                                                            )}
                                                    </React.Fragment>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                                <div className="lg:w-3/4 w-full relative">
                                    <ReactResizeDetector handleWidth>
                                        {({ width }) => {
                                            // Change the scale according to your needs
                                            const scale = width
                                                ? (1.188 * width) / 1000
                                                : 1;

                                            return (
                                                <div>
                                                    <Document
                                                        file="/guide.pdf"
                                                        onLoadSuccess={({
                                                            numPages,
                                                        }) =>
                                                            setNumPages(
                                                                numPages
                                                            )
                                                        }
                                                    >
                                                        <Page
                                                            pageNumber={
                                                                currentPage
                                                            }
                                                            scale={scale}
                                                            // height={548}
                                                            // set the canvasBackground prop according to dark or light mode
                                                            canvasBackground={
                                                                darkMode
                                                                    ? "#f5f5f5"
                                                                    : "#f5f5f5"
                                                            }
                                                            loading="Loading..."
                                                            renderTextLayer={
                                                                false
                                                            }
                                                            renderAnnotationLayer={
                                                                false
                                                            }
                                                        />
                                                    </Document>
                                                    <div className="flex justify-between mt-4 items-center">
                                                        <div>
                                                            <p>
                                                                Page{" "}
                                                                {currentPage} of{" "}
                                                                {numPages}
                                                            </p>
                                                        </div>
                                                        <div className="absolute left-1/2 transform -translate-x-1/2">
                                                            <button
                                                                onClick={
                                                                    previousPage
                                                                }
                                                                disabled={
                                                                    currentPage ===
                                                                    1
                                                                }
                                                                className="px-4 py-2 px-4 py-2 font-bold rounded hover:text-blue-500"
                                                            >
                                                                ←
                                                            </button>
                                                            <button
                                                                onClick={
                                                                    nextPage
                                                                }
                                                                disabled={
                                                                    currentPage ===
                                                                    numPages
                                                                }
                                                                className="px-4 py-2 px-4 py-2 font-bold rounded hover:text-blue-500"
                                                            >
                                                                →
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </ReactResizeDetector>
                                </div>
                            </div>
                        )}

                        <section className="mt-8">
                            <Link href="/">
                                <button
                                    type="button"
                                    className={`rounded-md py-2 px-4 transition ease-in duration-200 text-center text-base font-regular ${
                                        darkMode
                                            ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700  focus:ring-2 focus:ring-offset-2 border border-neutral-100 shadow-md shadow-neutral-800"
                                            : "bg-neutral-100 text-neutral-900 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-neutral-900 shadow-md shadow-neutral-400"
                                    }`}
                                >
                                    Back to Home
                                </button>
                            </Link>
                        </section>
                    </main>
                    {/* <footer
                            className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 ${
                                darkMode ? "dark:bg-slate-800" : ""
                            }`}
                        >
                            <div className="container mx-auto px-4">
                                <p className="text-center text-xl">
                                    &copy; VoyageVR {new Date().getFullYear()}
                                </p>
                            </div>
                        </footer> */}
                </div>
            </div>
        </>
    );
}

// function CategoryCard({ title, items, onItemClick, activeItemKey }) {
//     return (
//         <div className="border rounded-md p-4">
//             <h2 className="font-semibold mb-4">{title}</h2>
//             <ul className="space-y-2 ">
//                 {Object.keys(items).map((key, index) => (
//                     <li
//                         key={index}
//                         className={`cursor-pointer ${
//                             activeItemKey === key ? "font-bold" : ""
//                         }`}
//                         onClick={() => onItemClick(key, items[key])}
//                     >
//                         - {key}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
