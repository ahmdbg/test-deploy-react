import { Suspense, lazy } from 'react'

// Lazy load components
const NavbarDemo = lazy(() => import('../components/section/Navbar'))
const ParallaxScrollDemo = lazy(() => import('../components/section/ParallaxScroll').then(module => ({ default: module.ParallaxScrollDemo })))
const ImagesSliderDemo = lazy(() => import('../components/section/Image-slider').then(module => ({ default: module.ImagesSliderDemo })))
const Footer = lazy(() => import('../components/section/Footer'))

const Gallery = () => {
  return (
    <>
      <Suspense fallback={<div>Loading navbar...</div>}>
        <NavbarDemo />
      </Suspense>
      
      <Suspense fallback={<div>Loading content...</div>}>
        <ImagesSliderDemo />
        <div className="relative min-h-screen py-2 md:py-4">
          <ParallaxScrollDemo />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default Gallery
