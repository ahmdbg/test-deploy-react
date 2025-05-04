import { Suspense, lazy } from 'react'

// Lazy load components
const NavbarDemo = lazy(() => import('../components/section/Navbar'))
const VortexDemo = lazy(() => import('../components/section/Vortex').then(module => ({ default: module.VortexDemo })))
const StickyScrollRevealDemo = lazy(() => import('../components/section/Sticky-Scroll').then(module => ({ default: module.StickyScrollRevealDemo })))
const ThreeDMarqueeDemo = lazy(() => import('../components/section/marquee').then(module => ({ default: module.ThreeDMarqueeDemo })))
const Footer = lazy(() => import('../components/section/Footer'))
const GoogleGeminiEffectDemo = lazy(() => import('../components/section/Gemini-effects').then(module => ({ default: module.GoogleGeminiEffectDemo })))

const About = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarDemo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <VortexDemo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <GoogleGeminiEffectDemo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <StickyScrollRevealDemo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeDMarqueeDemo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default About
