"use client";
import React from "react";
import { StickyScroll } from "../ui/Sticky-Scroll-Reveal";
import { motion } from "framer-motion";

const content = [
    {
        title: "Amerta Night Show",
        description:
            "Nikmati keindahan seni tradisional yang dipadukan dengan teknologi modern. Pertunjukan yang memukau dengan tata cahaya dan multimedia yang memanjakan mata.",
        content: (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#025f92] to-[#1b425c] rounded-2xl p-8 backdrop-blur-sm bg-opacity-20"
            >
                <img
                    src="/show/image-1.webp"
                    className="h-full w-full object-cover rounded-xl shadow-2xl"
                    alt="Amerta Night Show"
                />
            </motion.div>
        ),
    },
    {
        title: "Kolaborasi Seni",
        description:
            "Saksikan perpaduan memukau antara tari tradisional, musik modern, dan teknologi visual yang menciptakan pengalaman pertunjukan yang tak terlupakan.",
        content: (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#1b425c] to-[#025f92] rounded-2xl p-8 backdrop-blur-sm bg-opacity-20"
            >
                <img
                    src="/show/image-4.webp"
                    className="h-full w-full object-cover rounded-xl shadow-2xl"
                    alt="Kolaborasi Seni"
                />
            </motion.div>
        ),
    },
    {
        title: "Warisan Budaya",
        description:
            "Melestarikan warisan budaya Indonesia melalui pertunjukan yang inovatif. Menginspirasi generasi muda untuk mencintai dan menjaga kekayaan budaya nusantara.",
        content: (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#025f92] to-[#1b425c] rounded-2xl p-8 backdrop-blur-sm bg-opacity-20"
            >
                <img
                    src="/show/image-8.webp"
                    className="h-full w-full object-cover rounded-xl shadow-2xl"
                    alt="Warisan Budaya"
                />
            </motion.div>
        ),
    },
    {
        title: "Teknologi Modern",
        description:
            "Menghadirkan pengalaman visual yang memukau dengan teknologi terkini. Gabungan sempurna antara seni tradisional dan inovasi modern dalam satu pertunjukan spektakuler.",
        content: (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#1b425c] to-[#025f92] rounded-2xl p-8 backdrop-blur-sm bg-opacity-20"
            >
                <img
                    src="/show/image-12.webp"
                    className="h-full w-full object-cover rounded-xl shadow-2xl"
                    alt="Teknologi Modern"
                />
            </motion.div>
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div className="relative w-full py-4 min-h-screen">
            {/* Background with gradient overlay */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.3)"
                }}
            />
            
            {/* Gradient Overlay */}
            <div 
                className="absolute inset-0 z-1"
                style={{
                    background: "linear-gradient(45deg, rgba(2,95,146,0.2), rgba(27,66,92,0.2), rgba(0,0,0,0.2))"
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                <StickyScroll content={content} />
            </div>
        </div>
    );
}
