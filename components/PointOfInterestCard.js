import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const PointOfInterestCard = ({
    image,
    name,
    index,
    onClick,
    highlightFoodCard,
    highlightMonCard,
}) => {
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
        <motion.div
            key={index}
            className={`relative overflow-hidden border-4 border-transparent  ${
                index === highlightMonCard
                    ? "focus-class"
                    : index === highlightFoodCard
                    ? "focus-class"
                    : ""
            }`}
            style={{ borderRadius: "0.7rem" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="overflow-hidden rounded-lg">
                <motion.div animate={controls}>
                    <Image
                        src={"/" + image}
                        alt={`${name} - ${index}`}
                        className="w-full h-48 object-cover"
                        width={500}
                        height={500}
                    />
                </motion.div>
            </div>
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div
                className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl text-center p-4"
                onClick={onClick}
            >
                {name}
            </div>
        </motion.div>
    );
};

export default PointOfInterestCard;
