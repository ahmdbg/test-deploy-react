"use client";

import React from "react";
import { motion } from "motion/react";

export function ParallaxScroll({ images }) {
  const rows = {
    0: "translate-y-[-45%]",
    1: "translate-y-[-35%]",
    2: "translate-y-[-25%]",
    3: "translate-y-[-15%]",
    4: "translate-y-[-20%]",
  };

  // Use different column arrays for mobile and desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const columns = isMobile ? [0, 1] : [0, 1, 2, 3, 4];

  return (
    <div className="relative min-h-[60vh] overflow-hidden px-2 md:px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {columns.map((col) => (
          <div key={col} className={`flex flex-col gap-2 md:gap-4 ${rows[col]}`}>
            {images
              .filter((_, i) => i % (isMobile ? 2 : 5) === col)
              .map((image, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  key={idx}
                  className="relative h-56 md:h-80"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${idx}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
