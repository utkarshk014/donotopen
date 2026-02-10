"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ScatteredGallery({ images }: { images: string[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<
        { x: number; y: number; rotate: number; scale: number; zIndex: number }[]
    >([]);

    useEffect(() => {
        // Generate random positions ensuring they stay somewhat within bounds
        // improved "collage" feel with localized clusters or better spread
        const newItems = images.map((_, i) => ({
            // Spread across 80% of width/height to keep them mostly on screen
            x: Math.random() * 80 - 40,
            y: Math.random() * 80 - 40,
            rotate: Math.random() * 40 - 20, // More dramatic rotation (-20 to 20)
            scale: 0.8 + Math.random() * 0.5, // Varied sizes (0.8x to 1.3x)
            zIndex: i,
        }));
        setItems(newItems);
    }, [images]);

    if (items.length === 0) return null;

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-pink-50/50 flex items-center justify-center"
        >
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.2}
                    whileHover={{ scale: 1.2, zIndex: 100, cursor: "grab" }}
                    whileDrag={{ scale: 1.2, zIndex: 100, cursor: "grabbing" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: items[index].scale,
                        x: `${items[index].x}vw`,
                        y: `${items[index].y}vh`,
                        rotate: items[index].rotate,
                        zIndex: items[index].zIndex,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                        type: "spring",
                        damping: 20
                    }}
                    className="absolute p-3 bg-white shadow-2xl rounded-sm transform-gpu will-change-transform"
                    style={{
                        width: "300px", // Base size, will be scaled
                    }}
                    onClick={() => {
                        // Bring to front on click
                        const newItems = [...items];
                        newItems[index].zIndex = Math.max(...newItems.map(i => i.zIndex)) + 1;
                        setItems(newItems);
                    }}
                >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-2 pointer-events-none">
                        <Image
                            src={src}
                            alt={`Diva Moment ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority={index < 4}
                        />
                    </div>
                    <div className="text-center font-[family-name:var(--font-playfair)] text-slate-800 text-lg font-bold tracking-tight">
                        Diva #{index + 1}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
