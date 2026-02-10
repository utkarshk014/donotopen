"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ThemedSlide, { SlideData } from "./ThemedSlide";

export default function PhotoSlider({ slides }: { slides: SlideData[] }) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        if (index < slides.length - 1) {
            setDirection(1);
            setIndex((prev) => prev + 1);
        }
    }, [index, slides.length]);

    const prevSlide = useCallback(() => {
        if (index > 0) {
            setDirection(-1);
            setIndex((prev) => prev - 1);
        }
    }, [index]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <div className="relative w-full h-[90vh] flex flex-col items-center justify-center">

            {/* Slide Container */}
            <div className="relative w-full max-w-6xl h-[80%]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={index}
                        custom={direction}
                        initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <ThemedSlide slide={slides[index]} isActive={true} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-2 flex items-center gap-8 z-50">
                <button
                    onClick={prevSlide}
                    disabled={index === 0}
                    className={`p-4 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all text-pink-500 group backdrop-blur-sm ${index === 0 ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
                    aria-label="Previous slide"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <span className="text-pink-400 font-medium text-sm tracking-widest">
                    {index + 1} / {slides.length}
                </span>

                <button
                    onClick={nextSlide}
                    disabled={index === slides.length - 1}
                    className={`p-4 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all text-pink-500 group backdrop-blur-sm ${index === slides.length - 1 ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
                    aria-label="Next slide"
                >
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </div>
    );
}
