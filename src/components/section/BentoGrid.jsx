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
    <BentoGrid className="mx-auto px-16">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
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
        href="/show"
      >
        Get ticket NOW
      </motion.a>

    </BentoGrid>
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
