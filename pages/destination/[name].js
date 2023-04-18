import { useRouter } from "next/router";
import destinations from "../../data/destinations";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";

export default function DestinationPage() {
  const router = useRouter();
  const { name } = router.query;
  const decodedName = decodeURIComponent(name);
  const destination = destinations.find((dest) => dest.name === decodedName);

  if (!destination) {
    return <div>Loading...</div>;
  }

  const { landmarks, culture, cuisine, history, nearbyAttractions } =
    destination;

  return (
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white">
      <div className="container mx-auto p-4 ">
        <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
        <p className="dark:text-slate-400 text-xl mb-8">
          {destination.description}
        </p>
        <div className=" mb-4 hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out w-full">
          <VideoPlayer videoId={destination.introductoryVideo} />
        </div>
        <h2 className="text-2xl font-semibold mb-4 mt-4">Images</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4 ">
          {destination.images.map((image, index) => (
            <img
              key={index}
              src={"../" + image}
              alt={`${destination.name} - ${index}`}
              className="w-full h-48 object-cover rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 ">
          <CategoryCard title="Landmarks" items={landmarks} />
          <CategoryCard title="Culture" items={culture} />
          <CategoryCard title="Cuisine" items={cuisine} />
          <CategoryCard title="History" items={history} />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Nearby Attractions</h2>
        {/* span the two images along the width of the div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nearbyAttractions.map((attraction) => (
            <div>
              <h3 className="font-semibold mb-2">{attraction.name}</h3>
              <img
                src={"../" + attraction.image}
                alt={attraction.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <footer className="mt-8">
          <Link href="/">
            <button className="border border-gray-200 rounded-md p-4 hover:bg-neutral-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">
              Back to Home
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

function CategoryCard({ title, items }) {
  return (
    <div className="border border-gray-200 rounded-md p-4">
      <h2 className="font-semibold mb-4">{title}</h2>
      <ul className="space-y-2 dark:text-slate-400 ">
        {items.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
