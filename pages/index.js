import Head from "next/head";
import { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

export default function Home() {
  const [destinationList, setDestinationList] = useState([]);
  useEffect(() => {
    setDestinationList(destinations);
  }, []);

  return (
    <>
      <Head>
        <title>VoyageVR: Immerse Yourself in the World</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </Head>

      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4 ">
          <h1 className="text-4xl font-bold">VoyageVR</h1>
          <p className="text-xl">
            Explore the globe from the comfort of your home
          </p>
        </div>
      </header>

      <main className="bg-white bg-cover bg-center dark:bg-slate-800 text-black dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {destinationList.map((destination) => (
              <DestinationCard
                key={destination.id}
                image={destination.image}
                name={destination.name}
                description={destination.description}
              />
            ))}
          </div>
        </div>
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
          <div className="container mx-auto px-4">
            <p className="text-center text-xl">
              &copy; VoyageVR {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
