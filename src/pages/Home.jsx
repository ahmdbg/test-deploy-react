import { HeroParallaxDemo } from "../components/section/HeroParallax"
import { BentoGridDemo } from "../components/section/BentoGrid"
import { LampDemo } from "../components/section/Lamps"
import Footer from "../components/section/Footer"
import { NavbarDemo } from "../components/section/Navbar"
import { BackgroundBoxesDemo } from "../components/section/Background-boxer"
import About from "../components/section/About"
import TestimonialCarousel from "../components/section/Testimonial"
import SponsorCarousel from "../components/section/Sponsor"
import { motion } from "framer-motion"

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <NavbarDemo />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroParallaxDemo />
      </section>

      {/* About Section with Padding */}
      <section className="py-20">
        <About />
      </section>

      {/* Performance Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition-all duration-300"
          >
            OUR PERFORMANCE
          </motion.h2>
          <BentoGridDemo />
        </div>
      </section>

      {/* Background Boxes Section */}
      <section className="py-20">
        <BackgroundBoxesDemo />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            What People Say
          </motion.h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Event Highlight Section */}
      <section className="relative">
        <LampDemo />
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Sponsors
          </motion.h2>
          <SponsorCarousel />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
