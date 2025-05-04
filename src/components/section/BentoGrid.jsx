// BentoGridDemo.jsx
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function BentoGridDemo() {
  return (
    <section className="relative min-h-screen py-20">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
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
          background: "linear-gradient(45deg, rgba(2,95,146,0.2), rgba(27,66,92,0.2), rgba(0,0,0,0.2))",
          backdropFilter: "blur(10px)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] to-[#1b425c]">Performances</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          <BentoGrid className="grid gap-6 md:gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className={`w-full ${i === 3 || i === 6 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full aspect-[16/9] overflow-hidden rounded-xl"
                    >
                      {item.header}
                    </motion.div>
                  }
                  icon={item.icon}
                  className="h-full backdrop-blur-sm bg-white/10 
                    border border-white/20 
                    hover:shadow-xl 
                    hover:shadow-[#025f92]/20
                    transition-all duration-300
                    rounded-xl p-4"
                />
              </motion.div>
            ))}
          </BentoGrid>
        </div>
        
        <div className="mt-20 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="inline-block px-8 py-3 text-lg font-semibold text-white 
              bg-gradient-to-r from-[#025f92] to-[#1b425c] 
              rounded-full shadow-lg hover:shadow-xl 
              transform hover:-translate-y-1 transition-all duration-300"
            href="/show"
          >
            Explore More
          </motion.a>
        </div>
      </div>
    </section>
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
