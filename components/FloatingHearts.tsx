"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; scale: number }[]>([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Random percentage for left position
            delay: Math.random() * 10,
            scale: 0.5 + Math.random() * 0.5,
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute bottom-[-50px] text-pink-300/40"
                    initial={{ y: 0, x: `${heart.x}vw`, opacity: 0, scale: heart.scale }}
                    animate={{
                        y: "-110vh",
                        opacity: [0, 1, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    style={{ left: 0 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
