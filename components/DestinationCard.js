import Link from "next/link";

const DestinationCard = ({ image, name, description }) => {
  return (
    <Link href={`/destination/${encodeURIComponent(name)}`}>
      <div className="block border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out h-full flex flex-col">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 flex-grow flex flex-col">
          <h2 className="text-slate-900 dark:text-white text-xl font-semibold mb-2">
            {name}
          </h2>
          <p className="text-slate-500 dark:text-slate-400  flex-grow">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
