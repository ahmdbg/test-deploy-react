import React, { useEffect, useState } from 'react';
import { ThreeDCardDemo } from './3d-card'; // Pastikan path ini sesuai dengan struktur folder kamu

const AboutSection = () => {
    const [setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

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
    }, []);

    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-8">

            {/* Teks */}
            <div className="w-full md:w-1/2 md:pl-12">
                <h2 className="text-4xl font-extrabold text-center mt-10 text-transparent shadow-lg transform transition-all duration-300 hover:scale-105 py-10">
                    <span className="text-white">We Are</span> <span className="bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">AMERTA</span>
                </h2>
                {/* <h3 className="text-2xl font-light mb-6">MERAIH MASA INDONESIA EMAS 2045</h3> */}
                <p className="text-lg leading-relaxed mb-8">
                    Subtema Menuju Indonesia emas 2045 melambangkan harapan menciptakan generasi unggul yang mencintai budaya bangsa.
                    Amerta bertujuan memperkuat identitas nasional sebagai fondasi menuju Indonesia yang maju dan berdaya saing.
                </p>

            </div>
            {/* Gambar */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <ThreeDCardDemo />
            </div>

        </section>
    );
};

export default AboutSection;
