import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ image, name, description, darkMode }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isHovered) {
            controls.start({
                // ease: "easeInOut",
                scale: 1.1,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
            });
        } else {
            controls.start({
                scale: 1,
                transition: { duration: 0.3 },
            });
        }
    }, [isHovered]);

    return (
        <Link href={`/destination/${encodeURIComponent(name)}`}>
            <motion.div
                className={`block rounded-lg shadow-lg transform h-full flex flex-col ${
                    darkMode
                        ? "bg-neutral-800 text-neutral-100"
                        : "bg-neutral-100 text-neutral-900"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="overflow-hidden rounded-t-lg">
                    <motion.div animate={controls}>
                        <Image
                            src={"/" + image}
                            alt={name}
                            width={1000}
                            height={1000}
                            className="w-full h-48 object-cover"
                        />
                    </motion.div>
                </div>
                <div className="p-4 flex-grow flex flex-col rounded-b-lg">
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <p className="flex-grow">{description}</p>
                </div>
            </motion.div>
        </Link>
    );
};

export default DestinationCard;
