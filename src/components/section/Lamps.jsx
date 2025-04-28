"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamps";
import { Navigate } from "react-router-dom";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-blue-300 to-blue-950 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
        BVENT SPECTACULAR <br /> <span className="text-[40px]">Join us for an unforgettable experience!</span>
      </motion.h1>
      <motion.a
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br cursor-pointer from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-xl font-medium tracking-tight  md:text-xl sm:text-sm border-2 border-slate-300 rounded-4xl px-4  text-white hover:bg-slate-300 hover:text-blue-950 hover:border-blue-900 transition duration-300 ease-in-out"
        // onClick={() => Navigate("/booking")}
        href="/booking"
        >
        Get ticket NOW
      </motion.a>
    </LampContainer>
  );
}
