import { HeroParallaxDemo } from "../components/section/HeroParallax"
import { BentoGridDemo } from "../components/section/BentoGrid"
import { LampDemo } from "../components/section/Lamps"
import Footer from "../components/section/Footer"
import { NavbarDemo } from "../components/section/Navbar"
import { BackgroundBoxesDemo } from "../components/section/Background-boxer"
import About from "../components/section/About"



function Home() {

  return (
    <>
      <NavbarDemo />
      <HeroParallaxDemo />
      <About />

      <h2 className="text-4xl font-extrabold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg transform transition-all duration-300 hover:scale-105 py-10">
        OUR PERFORMANCE
      </h2>
      <BentoGridDemo />

      <BackgroundBoxesDemo />
      <LampDemo />

      <Footer />
    </>
  )
}

export default Home
