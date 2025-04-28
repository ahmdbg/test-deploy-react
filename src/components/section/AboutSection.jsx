import React, { useEffect, useState } from 'react';
import { CardDemo } from './Cards'; // Pastikan path ini sesuai dengan struktur folder kamu

const AboutSection = () => {
    const [timeLeft, setTimeLeft] = useState({
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
            {/* Gambar */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <CardDemo />
            </div>

            {/* Teks */}
            <div className="w-full md:w-1/2 md:pl-12">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="text-cyan-400">Coming</span> <span className="text-white">Soon</span>
                </h2>
                <h3 className="text-2xl font-light mb-6">MERAIH MASA INDONESIA EMAS 2045</h3>
                <p className="text-lg leading-relaxed mb-8">
                    Subtema Menuju Indonesia emas 2045 melambangkan harapan menciptakan generasi unggul yang mencintai budaya bangsa.
                    Amerta bertujuan memperkuat identitas nasional sebagai fondasi menuju Indonesia yang maju dan berdaya saing.
                </p>

                {/* Countdown */}
                <div className="flex space-x-6 text-cyan-400 text-3xl font-bold">
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.days}</span>
                        <span className="text-sm text-white">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.hours}</span>
                        <span className="text-sm text-white">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.minutes}</span>
                        <span className="text-sm text-white">Mins</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.seconds}</span>
                        <span className="text-sm text-white">Secs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
