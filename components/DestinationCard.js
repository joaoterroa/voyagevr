import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const DestinationCard = ({ image, video, name, description, darkMode }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const textControls = useAnimation();
    const videoRef = useRef(null);
    const [activeTab, setActiveTab] = useState("Monuments");

    useEffect(() => {
        if (isHovered) {
            controls.start({
                scale: 1.1,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
            });

            textControls.start({
                height: "auto",
                opacity: 1,
                marginTop: "1rem",
                transition: { duration: 0.05 },
            });

            if (videoRef.current && videoRef.current.readyState === 4) {
                videoRef.current.play();
            }
        } else {
            controls.start({
                scale: 1,
                transition: { duration: 0.3 },
            });

            textControls.start({
                height: 0,
                opacity: 0,
                marginBottom: 0,
                marginTop: 0,
                transition: { duration: 0.05 },
            });

            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeAttribute("src");
                videoRef.current.load();
            }
        };
    }, [isHovered]);

    return (
        <Link href={`/destination/${encodeURIComponent(name)}`}>
            <motion.div
                className={`block rounded-lg shadow-lg transform h-full flex flex-col
                 ${
                     darkMode
                         ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 duration-300 ease-in-out hover:text-neutral-200 hover:shadow-2xl"
                         : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 duration-300 ease-in-out hover:text-neutral-800"
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
                    {/* <motion.div
                        className={`overflow-hidden transition-all duration-10 
        ${darkMode ? "text-neutral-200" : "text-neutral-800"}`}
                        initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                        animate={textControls}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <strong>Visit {name} </strong>
                            <HiOutlineArrowNarrowRight />
                        </div>
                    </motion.div> */}
                </div>
            </motion.div>
        </Link>
    );
};

export default DestinationCard;
