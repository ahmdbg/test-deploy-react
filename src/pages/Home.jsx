import React, { Suspense } from "react"
import { motion } from "framer-motion"

// Convert regular imports to lazy imports
const HeroParallaxDemo = React.lazy(() => import("../components/section/HeroParallax"))
const BentoGridDemo = React.lazy(() => import("../components/section/BentoGrid"))
const LampDemo = React.lazy(() => import("../components/section/Lamps"))
const Footer = React.lazy(() => import("../components/section/Footer"))
const NavbarDemo = React.lazy(() => import("../components/section/Navbar"))
const BackgroundBoxesDemo = React.lazy(() => import("../components/section/Background-boxer"))
const About = React.lazy(() => import("../components/section/About"))
const TestimonialCarousel = React.lazy(() => import("../components/section/Testimonial"))
const SponsorCarousel = React.lazy(() => import("../components/section/Sponsor"))

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <NavbarDemo />

        {/* Hero Section */}
        <section className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <HeroParallaxDemo />
          </Suspense>
        </section>

        {/* About Section with Padding */}
        <section className="py-20">
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
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
            <Suspense fallback={<LoadingSpinner />}>
              <BentoGridDemo />
            </Suspense>
          </div>
        </section>

        {/* Background Boxes Section */}
        <section className="py-20">
          <Suspense fallback={<LoadingSpinner />}>
            <BackgroundBoxesDemo />
          </Suspense>
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
            <Suspense fallback={<LoadingSpinner />}>
              <TestimonialCarousel />
            </Suspense>
          </div>
        </section>

        {/* Event Highlight Section */}
        <section className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <LampDemo />
          </Suspense>
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
            <Suspense fallback={<LoadingSpinner />}>
              <SponsorCarousel />
            </Suspense>
          </div>
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </Suspense>
    </main>
  )
}

export default Home
