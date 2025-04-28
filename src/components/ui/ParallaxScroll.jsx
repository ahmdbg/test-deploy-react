"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);
  const fourthPart = images.slice(0, third);
  const fifthPart = images.slice(third, 2 * third);

  return (
    <div
      className={cn("h-[475vh] w-full overflow-y-auto items-start", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-10 max-w-7xl mx-auto py-40 px-10">
        {/* Column 1 */}
        <div className="grid gap-2 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div key={`grid-1-${idx}`} style={{ y: translateFirst }}>
              <img
                src={el}
                alt="thumbnail"
                className="h-full w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
              />
            </motion.div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="grid gap-2 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={`grid-2-${idx}`} style={{ y: translateSecond }}>
              <img
                src={el}
                alt="thumbnail"
                className="h-auto w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
              />
            </motion.div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid gap-2 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div key={`grid-3-${idx}`} style={{ y: translateThird }}>
              <img
                src={el}
                alt="thumbnail"
                className="h-auto w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
              />
            </motion.div>
          ))}
        </div>
        {/* Column 4 */}
        <div className="grid gap-2 md:gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div key={`grid-4-${idx}`} style={{ y: translateFirst }}>
              <img
                src={el}
                alt="thumbnail"
                className="h-auto w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
              />
            </motion.div>  
          ))}
        </div>
        {/* Column 5 */}
        <div className="grid gap-2 md:gap-10">
          {fifthPart.map((el, idx) => (
            <motion.div key={`grid-5-${idx}`} style={{ y: translateSecond }}>
              <img
                src={el}
                alt="thumbnail"
                className="h-auto w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
              />
            </motion.div>  
          ))}
        </div>
      </div>
    </div>
  );
};
