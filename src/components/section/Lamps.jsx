"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function LampDemo() {
  const { scrollYProgress } = useScroll();
  // Menyesuaikan nilai transform untuk berbagai ukuran layar
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.div 
      className="relative w-full overflow-hidden"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"
        />
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
          alt="background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Layer */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="py-4 text-center font-bold tracking-tight space-y-4 sm:space-y-6 md:space-y-8"
          >
            <span className="block text-4xl mt-32 sm:text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              EVENT
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              SPECTACULAR
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-light text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            >
              Join us for an unforgettable experience!
            </motion.div>
          </motion.h1>

          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,255,255,0.3)"
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            href="/booking"
            className="mt-8 sm:mt-10 md:mt-12 inline-block bg-gradient-to-r from-purple-600 to-pink-600 
                     py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 
                     text-center text-base sm:text-lg md:text-xl font-bold text-white 
                     rounded-full border-2 border-white/30 
                     hover:from-purple-700 hover:to-pink-700 
                     transform transition-all duration-300 ease-in-out 
                     shadow-[0_0_15px_rgba(255,255,255,0.3)] 
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <span className="relative inline-flex items-center">
              GET TICKET NOW
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.a>
        </div>

        {/* Floating particles effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
