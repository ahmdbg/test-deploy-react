// BentoGridDemo.jsx
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid"; // path BentoGrid kamu tadi
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function BentoGridDemo() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <BentoGrid className="max-w-7xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} hover:shadow-xl transition-shadow duration-300`}
          />
        ))}
      </BentoGrid>
      
      <motion.a
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="mt-12 inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        href="/show"
      >
        Explore More
      </motion.a>
    </div>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
        alt="The Dawn of Innovation"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80"
        alt="The Digital Revolution"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
        alt="The Art of Design"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
        alt="The Power of Communication"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80"
        alt="The Pursuit of Knowledge"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1744894203359-baffe11eb6de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="The Joy of Creation"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1744894203359-baffe11eb6de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="The Joy of Creation"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <img
        src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80"
        alt="The Spirit of Adventure"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}

      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
