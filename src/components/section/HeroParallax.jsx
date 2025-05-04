import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative"
    >
      /* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale,
            backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(45deg, rgba(2,95,146,0.3), rgba(27,66,92,0.3), rgba(0,0,0,0.3))",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 z-1"
        style={{ y: yBg }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              background: i % 2 === 0
                ? "linear-gradient(45deg, #025f92, transparent)"
                : "linear-gradient(45deg, #1b425c, transparent)",
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-8 px-4 bg-[rgba(0,0,0,0.5)]"
        style={{ y: yText, opacity }}
      >
        <motion.h1
          className="text-4xl md:text-9xl font-bold"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] via-white to-[#1b425c]">
            Amerta Night Show
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Where technology meets imagination, creating tomorrow's solutions today.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;