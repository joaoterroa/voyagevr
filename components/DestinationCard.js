import Link from "next/link";
import { motion } from "framer-motion";

const DestinationCard = ({ image, name, description, darkMode }) => {
  return (
    <Link href={`/destination/${encodeURIComponent(name)}`}>
      <motion.div
        className={`block rounded-lg shadow-lg transform h-full flex flex-col ${
          darkMode
            ? "bg-neutral-800 text-neutral-100"
            : "bg-neutral-100 text-neutral-900"
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 flex-grow flex flex-col rounded-b-lg">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="flex-grow">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default DestinationCard;
