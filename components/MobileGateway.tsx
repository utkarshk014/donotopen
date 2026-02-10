"use client";

import { useEffect } from "react";

export default function MobileGateway() {
    useEffect(() => {
        // Load Tenor embed script
        const script = document.createElement("script");
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup might be aggressive if other components need it, 
            // but for this specific overlay it's safer to clean up self-spawned script.
            // However, duplicate scripts might exist. 
            // Given the simplicity, we'll append/remove.
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-pink-50 flex flex-col md:hidden items-center justify-center p-8 text-center space-y-8">
            <h1 className="text-3xl font-bold text-red-500 font-[family-name:var(--font-playfair)]">
                Open in laptop only! 💻
            </h1>
            <p className="text-lg text-slate-600 font-[family-name:var(--font-outfit)]">
                Stop being lazy and get your laptop! 🙄
            </p>
            <div className="w-full max-w-xs h-64 relative">
                <div
                    className="tenor-gif-embed"
                    data-postid="19784607"
                    data-share-method="host"
                    data-aspect-ratio="1.81818"
                    data-width="100%"
                    suppressHydrationWarning
                >
                    <a href="https://tenor.com/view/band-karo-hath-jod-ke-mai-modi-sahab-band-kar-bhai-bas-karo-hath-jod-ke-mai-guzarish-karta-hu-gif-19784607">
                        Band Karo Hath Jod Ke Mai Modi Sahab GIF
                    </a>
                    from{" "}
                    <a href="https://tenor.com/search/band+karo+hath+jod+ke-gifs">
                        Band Karo Hath Jod Ke GIFs
                    </a>
                </div>
            </div>
        </div>
    );
}
