import React from 'react'
import NavbarDemo from '../components/section/Navbar'
import Footer from '../components/section/Footer'
import { WavyBackground } from '../components/ui/wavy-background'
import ShowGrid from '../components/section/Show'

const Show = () => {
  return (
    <div>
      <NavbarDemo />
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p
          className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Our Performance
        </p>
        <p
          className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
      </WavyBackground>

      <ShowGrid />
      <Footer />

    </div>
  )
}

export default Show
