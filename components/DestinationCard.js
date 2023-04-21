import Link from "next/link";



const DestinationCard = ({ image, name, description, darkMode }) => {
  return (
    <Link href={`/destination/${encodeURIComponent(name)}`}>
      <div
        className={`block rounded-lg shadow-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out h-full flex flex-col ${darkMode ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-neutral-900"
          }`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 flex-grow flex flex-col rounded-b-lg">
          <h2 className="text-xl font-semibold mb-2">
            {name}
          </h2>
          <p className="flex-grow">
            {description}
          </p>
        </div>
      </div >
    </Link >
  );
};

export default DestinationCard;
