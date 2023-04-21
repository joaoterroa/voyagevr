import { useRouter } from "next/router";
import destinations from "../../data/destinations";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function DestinationPage() {
  const router = useRouter();
  const { name } = router.query;
  const decodedName = decodeURIComponent(name);
  const destination = destinations.find((dest) => dest.name === decodedName);
  const [currentTime, setCurrentTime] = useState(0);
  const [darkMode, setDarkMode] = useState(false);


  // Add this function inside the DestinationPage component
  const handleImageClick = (timestamp) => {
    setCurrentTime(timestamp);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
      <div className={darkMode ? "bg-neutral-900 text-neutral-100 " : "bg-neutral-100 text-neutral-900"}>
        <nav
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6"
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">VoyageVR</h1>
              <p className="text-xl">Explore the globe from the comfort of your home</p>
            </div>
            <button onClick={toggleDarkMode} className="focus:outline-none">
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
            <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl mb-8">
              {destination.description}
            </p>
            <div className=" mb-4 hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out w-full">
              <VideoPlayer videoId={destination.introductoryVideo} currentTime={currentTime} />
            </div>
            <h2 className="text-2xl font-semibold mb-4 mt-8">Points of Interest</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-4 ">
              {destination.images.map((image, index) => (
                <div key={index} className="relative hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out">
                  <Image
                    src={"/" + image}
                    alt={`${destination.name} - ${index}`}
                    className="w-full h-48 object-cover rounded-lg "
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl uppercase z-10" onClick={() => handleImageClick(timeStamps[index])}>{destination.landmarks[index]}</div>
                </div>
              ))}
            </div>


            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4 ">
              <CategoryCard title="Culture" items={culture} />
              <CategoryCard title="Cuisine" items={cuisine} />
              <CategoryCard title="History" items={history} />
            </div>
            {/* span the two images along the width of the div */}
            <footer className="mt-8">
              <Link href="/">
                <button className={`border rounded-md p-4 hover transition duration-200 ease-in-out ${darkMode ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700" : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"}`}>
                  Back to Home
                </button>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

function CategoryCard({ title, items }) {
  return (
    <div className="border rounded-md p-4">
      <h2 className="font-semibold mb-4">{title}</h2>
      <ul className="space-y-2 ">
        {items.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

