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
    <main className="bg-black min-h-screen relative overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <NavbarDemo />

        {/* Hero Section - Full height with no padding */}
        <section className="relative min-h-screen">
          <Suspense fallback={<LoadingSpinner />}>
            <HeroParallaxDemo />
          </Suspense>
        </section>

        {/* About Section - With proper spacing */}
        <section className="relative min-h-screen py-2 md:py-4">
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        </section>

        {/* Performance Section - With gradient separator */}
        <section className="relative min-h-screen py-2 md:py-4">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
          <Suspense fallback={<LoadingSpinner />}>
            <BentoGridDemo />
          </Suspense>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Background Boxes Section */}
        <section className="relative min-h-screen py-2 md:py-4">
          <Suspense fallback={<LoadingSpinner />}>
            <BackgroundBoxesDemo />
          </Suspense>
        </section>

        {/* Testimonials Section - With custom background */}
        <section className="relative min-h-screen py-32 md:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#025f92]/20 to-[#1b425c]/20 pointer-events-none"></div>
          <div className="container relative mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
            >
              What People Say
            </motion.h2>
            <Suspense fallback={<LoadingSpinner />}>
              <TestimonialCarousel />
            </Suspense>
          </div>
        </section>

        {/* Event Highlight Section */}
        <section className="relative min-h-screen py-2 md:py-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b425c]/20 to-black pointer-events-none"></div>
          <Suspense fallback={<LoadingSpinner />}>
            <LampDemo />
          </Suspense>
        </section>

        {/* Sponsors Section - With improved spacing */}
        <section className="relative py-2 md:py-4">
          <div className="container relative mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-20 text-white"
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
