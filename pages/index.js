import Head from "next/head";
import { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

export default function Home() {
  const [destinationList, setDestinationList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDestinationList(destinations);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Head>
        <title>VoyageVR: Immerse Yourself in the World</title>
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
                <span className="text-2xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>
        </nav>

        <main
          className={darkMode ? "bg-neutral-900" : "bg-neutral-100"}
        >
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {destinationList.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  image={destination.image}
                  name={destination.name}
                  description={destination.description}
                  darkMode={darkMode}
                // className={darkMode ? "border-neutral-100 bg-neutral-100" : "border-neutral-800 bg-neutral-800"}

                />
              ))}
            </div>
          </div>
          <footer
            className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 ${darkMode ? "dark:bg-slate-800" : ""}`}
          >
            <div className="container mx-auto px-4">
              <p className="text-center text-xl">
                &copy; VoyageVR {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </main>
      </div >
    </>
  );
}
