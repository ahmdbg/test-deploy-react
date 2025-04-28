import { NavbarDemo } from '../components/section/Navbar'
import { VortexDemo } from '../components/section/Vortex'
import { StickyScrollRevealDemo } from '../components/section/Sticky-Scroll'
import { ThreeDMarqueeDemo } from '../components/section/marquee'
import Footer from '../components/section/Footer'
import { GoogleGeminiEffectDemo } from '../components/section/Gemini-effects'

const About = () => {
  return (
    <>
     <NavbarDemo />
     <VortexDemo />
     <GoogleGeminiEffectDemo />
     <StickyScrollRevealDemo />
     <ThreeDMarqueeDemo />
     <Footer />
    </>
  )
}

export default About
