// src/components/StickyScroll.jsx

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../utils/cn"; // pastikan ada utils cn.js, kalau mau sekalian kubuatin juga

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "rgba(15, 23, 42, 0.2)", // slate-900 with transparency
        "rgba(0, 0, 0, 0.2)", // black with transparency
        "rgba(23, 23, 23, 0.2)", // neutral-900 with transparency
        "rgba(30, 41, 59, 0.2)", // slate-800 with transparency
    ];

    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
        "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
        "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
        "linear-gradient(to bottom right, #8b5cf6, #f97316)", // violet-500 to orange-500
    ];

    const [backgroundGradient] = useState(linearGradients[0]);


    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="relative flex flex-row h-[100vh] justify-center space-x-10 w-full overflow-y-auto rounded-md p-10 backdrop-blur-md"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20 h-[100vh]">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "sticky top-10 hidden h-100 w-120 overflow-hidden rounded-md bg-white lg:block",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
