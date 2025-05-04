import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThreeDCardDemo } from './3d-card';

const AboutSection = () => {
    const [setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Typing animation text
    const text = "Subtema Menuju Indonesia emas 2045 melambangkan harapan menciptakan generasi unggul yang mencintai budaya bangsa. Amerta bertujuan memperkuat identitas nasional sebagai fondasi menuju Indonesia yang maju dan berdaya saing.";
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 5); // Changed from 10 to 5 for faster typing

        return () => clearInterval(typing);
    }, []);

    useEffect(() => {
        const targetDate = new Date('2025-05-30T00:00:00'); // ganti dengan tanggal target kamu!

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });

            if (difference < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background with Festival Theme */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    filter: "brightness(0.3)"
                }}
            />

            {/* Backdrop Filter Layer */}
            <div 
                className="absolute inset-0 z-1"
                style={{
                    backdropFilter: "blur(8px)",
                    background: "linear-gradient(45deg, rgba(2,95,146,0.1), rgba(27,66,92,0.1), rgba(0,0,0,0.1))"
                }}
            />

            {/* Stage Lights Effect */}
            <div className="absolute inset-0 z-2">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-40 h-[300px] opacity-20"
                        style={{
                            left: `${i * 25}%`,
                            background: `linear-gradient(to bottom, ${i % 2 === 0 ? '#025f92' : '#1b425c'}, transparent)`,
                            transform: 'rotate(25deg)',
                        }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-8 backdrop-blur-sm">
                {/* Text Content */}
                <motion.div 
                    className="w-full md:w-1/2 md:pl-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className="text-5xl md:text-6xl font-extrabold text-center mt-10 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-white">We Are</span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] to-[#1b425c]">
                            AMERTA
                        </span>
                    </motion.h2>

                    <motion.p 
                        className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        {displayText}
                    </motion.p>
                </motion.div>

                {/* 3D Card */}
                <motion.div 
                    className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glassmorphism p-6 rounded-2xl">
                        <ThreeDCardDemo />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
