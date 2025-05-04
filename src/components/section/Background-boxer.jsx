"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

export default function BackgroundBoxesDemo() {
  const [displayText, setDisplayText] = useState('');
  const text = "Amerta Night Show adalah acara yang menggabungkan seni tradisional dengan teknologi modern, menciptakan pengalaman yang tak terlupakan bagi setiap pengunjung. Mari bergabung dalam perayaan budaya yang spektakuler ini.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 2); // Super fast typing speed

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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

      /* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] via-white to-[#1b425c]">
            About The Event
          </span>
            </h2>

            <motion.p
          className="text-lg md:text-xl text-white/80 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
            >
          {displayText}
            </motion.p>

            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center mt-8"
            >
          <motion.button
            onClick={() => window.location.href = '/about'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#025f92] to-[#1b425c] 
              rounded-full text-white font-medium
              hover:shadow-lg hover:shadow-[#025f92]/50 
              transition-all duration-300"
          >
            Learn More
          </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}
