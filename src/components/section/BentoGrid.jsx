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

export default function BentoGridDemo() {
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
    title: "Medley Tari Tradisional",
    description: "Gabungan tari-tari daerah yang mencerminkan kekayaan budaya nusantara.",
    header: (
      <img
        src="public/show/image-1.webp"
        alt="Medley Tari Tradisional"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tari Perang",
    description: "Tarian energik yang menggambarkan semangat juang dan keberanian para prajurit.",
    header: (
      <img
        src="public/show/image-4.webp"
        alt="Tari Perang"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tari Pabat Pibui",
    description: "Tarian etnik penuh warna yang mengangkat budaya lokal dengan gerak dinamis.",
    header: (
      <img
        src="public/show/image-8.webp"
        alt="Tari Pabat Pibui"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Drama Musikal",
    description: "Cerita yang dihidupkan dengan perpaduan akting, musik, dan tarian panggung.",
    header: (
      <img
        src="public/show/image-12.webp"
        alt="Drama Musikal"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pantomim",
    description: "Ekspresi tanpa kata yang menyentuh, mengandalkan gerak dan mimik wajah.",
    header: (
      <img
        src="public/show/image-2.webp"
        alt="Pantomim"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
];
