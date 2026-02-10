"use client";

import PhotoSlider from "@/components/PhotoSlider";
import { SlideData } from "@/components/ThemedSlide";
import { useEffect } from "react";

function getSlides(): SlideData[] {
    return [
        {
            title: "Ohh my Read head Baddie I want you ask you something",
            description: "You look really beautifyl in the red color hair 🥵",
            layout: "single",
            images: ["/images/collection/red_head_baddie.jpeg"]
        },
        {
            title: "Ohh my OOTD catalogue I want you to ask me something",
            description: "I don't think there is an outfit out there that you cannot slay 👸🏻",
            layout: "triplet",
            images: [
                "/images/collection/ootd_1.jpeg",
                "/images/collection/ootd_2.jpeg",
                "/images/collection/ootd_3.jpeg"
            ]
        },
        {
            title: "Ohh my sleeping Beauty I want you to ask me something",
            description: "I love every moment you sleep on my arms 💪🏼",
            layout: "single",
            images: ["/images/collection/sleeping_beauty.jpeg"]
        },
        {
            title: "Ohh my Food Partner I want you to ask me something",
            description: "I always my two of my meals hot, the food and you 🔥",
            layout: "triplet",
            images: [
                "/images/collection/foodie_1.jpeg",
                "/images/collection/foodie_2.jpeg",
                "/images/collection/foodie_3.jpeg"
            ]
        },
        {
            title: "Ohh my master Guide I want you to ask me something",
            description: "You always have a plan B for everything, and I love it",
            layout: "split",
            images: [
                "/images/collection/guide_1.jpeg",
                "/images/collection/guide_2.jpeg"
            ]
        },
        {
            title: "Ohh my Traditional Queen I want you to ask me something",
            description: "you rock traditional but I love your western outfits more 😅",
            layout: "single",
            images: ["/images/collection/traditional.jpeg"]
        },
        {
            title: "Ohh my Nakre walli I want you to ask me something",
            description: "All the drama, all the attitude. Love it. 💅",
            layout: "single",
            images: ["/images/collection/nakre.jpeg"]
        },
        {
            title: "Ohh my Memories piggy bank I want you to ask me something",
            description: "I would love to make more and more memories and relive everything again ",
            layout: "triplet",
            images: [
                "/images/collection/memory_1.jpeg",
                "/images/collection/memory_2.jpeg",
                "/images/collection/memory_3.jpeg"
            ]
        },
        {
            title: "Will you be my Valentine?",
            description: "",
            layout: "valentine",
            images: ["/images/collection/no.jpg"]
        }
    ];
}

export default function MainPage() {
    const slides = getSlides();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-pink-50 flex flex-col justify-center items-center text-slate-800">
            <PhotoSlider slides={slides} />
        </div>
    );
}
