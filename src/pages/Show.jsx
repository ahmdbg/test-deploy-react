import React from 'react'
import { NavbarDemo } from '../components/section/Navbar'
import Footer from '../components/section/Footer'
import { WavyBackgroundDemo } from '../components/section/wavy-bg'
import ShowGrid from '../components/section/Show'

const Show = () => {
  return (
    <div>
      <NavbarDemo/>
      <WavyBackgroundDemo/>
      <ShowGrid/>
      <Footer/>

    </div>
  )
}

export default Show
