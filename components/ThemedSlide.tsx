"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export interface SlideData {
    title: string;
    description: string;
    layout: "single" | "split" | "triplet" | "valentine";
    images: string[];
}

export default function ThemedSlide({ slide, isActive }: { slide: SlideData; isActive: boolean }) {
    const { title, description, layout, images } = slide;

    // Single Image Layout (Full focus)
    if (layout === "single") {
        return (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                <motion.div
                    animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0.9, rotate: -2 }}
                    className="relative w-full max-w-sm aspect-[3/4] bg-white p-3 shadow-2xl rounded-sm transform transition-all duration-500"
                >
                    <div className="relative w-full h-full overflow-hidden bg-gray-100">
                        <Image
                            src={images[0]}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
                <div className="text-center mt-8">
                    <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-pink-600 font-bold tracking-tight">
                        {title}
                    </h2>
                    <p className="mt-2 text-slate-500 font-[family-name:var(--font-outfit)] max-w-md mx-auto">
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    // Split Layout (2 items comparison/pair)
    if (layout === "split") {
        return (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                <div className="flex flex-row gap-4 md:gap-8 items-center justify-center w-full max-w-2xl h-[60%]">
                    {images.slice(0, 2).map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0, rotate: i === 0 ? -3 : 3 } : { opacity: 0, y: 20 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative w-1/2 h-full bg-white p-2 shadow-xl rounded-sm"
                        >
                            <div className="relative w-full h-full overflow-hidden bg-gray-100">
                                <Image
                                    src={src}
                                    alt={`${title} ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-[family-name:var(--font-playfair)] text-purple-600 font-bold">
                        {title}
                    </h2>
                    <p className="mt-2 text-slate-500 font-[family-name:var(--font-outfit)] max-w-md mx-auto">
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    // Triplet Layout (Horizontal strip)
    if (layout === "triplet") {
        return (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
                <div className="flex flex-row gap-2 md:gap-4 items-center justify-center w-full max-w-4xl h-[50%] md:h-[60%]">
                    {images.slice(0, 3).map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isActive ? { scale: 1, opacity: 1, y: i === 1 ? -20 : 0 } : { scale: 0.8, opacity: 0 }} // Center one pops up
                            transition={{ delay: i * 0.1, type: "spring" }}
                            className="relative w-1/3 h-full bg-white p-2 shadow-lg rounded-sm first:rotate-[-2deg] last:rotate-[2deg] hover:z-10 hover:scale-105 transition-transform"
                        >
                            <div className="relative w-full h-full overflow-hidden bg-gray-100">
                                <Image
                                    src={src}
                                    alt={`${title} ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 33vw, 25vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-[family-name:var(--font-playfair)] text-indigo-600 font-bold">
                        {title}
                    </h2>
                    <p className="mt-2 text-slate-500 font-[family-name:var(--font-outfit)] max-w-md mx-auto">
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    // Valentine Question Layout
    if (layout === "valentine") {
        const [yesClicked, setYesClicked] = useState(false);

        const handleYesClick = () => {
            setYesClicked(true);
            // Re-run the Tenor embed script if it's already loaded (since the div is new)
            // Or load it if missing. The script looks for .tenor-gif-embed on load.
            // If already loaded, we might need to manually trigger it.
            // Tenor's script replaces the div content.

            setTimeout(() => {
                const script = document.createElement("script");
                script.src = "https://tenor.com/embed.js";
                script.async = true;
                document.body.appendChild(script);
            }, 100);

            import("canvas-confetti").then((confetti) => {
                confetti.default({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff0000', '#ff69b4', '#ffffff']
                });
            });
        };

        return (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">

                {yesClicked && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 w-full max-w-md h-64 relative z-30"
                    >
                        <div
                            className="tenor-gif-embed"
                            data-postid="18543717"
                            data-share-method="host"
                            data-aspect-ratio="2.37037"
                            data-width="100%"
                        >
                            <a href="https://tenor.com/view/housefull2010-akshay-kumar-deepika-padukone-kissi-kissi-in-italian-park-gif-18543717">Housefull2010 Akshay Kumar Deepika Padukone GIF</a>
                            from <a href="https://tenor.com/search/housefull2010-gifs">Housefull2010 GIFs</a>
                        </div>
                    </motion.div>
                )}

                <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] text-red-600 font-bold tracking-tight text-center mb-12 animate-pulse">
                    {title}
                </h2>

                <div className="flex gap-8 items-center justify-center relative">
                    {/* YES Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleYesClick}
                        className="px-8 py-4 bg-red-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-600 transition-colors z-20"
                    >
                        Yes! 💖
                    </motion.button>


                    {/* NO Button (Hover Trap) */}
                    <div className="relative group">
                        <button
                            className="px-8 py-4 bg-gray-200 text-gray-500 text-xl font-bold rounded-full cursor-not-allowed"
                        >
                            No 😢
                        </button>

                        {/* Image shown on hover - Absolute positioned to not disturb layout */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 flex items-center justify-center">
                            <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden shadow-2xl rotate-12 bg-white p-2">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/collection/no.jpg"
                                        alt="No response"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-slate-500 font-[family-name:var(--font-outfit)] opacity-60">
                    {description}
                </p>
            </div>
        );
    }

    return null;
}
