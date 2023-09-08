import React, { useState } from 'react'
import Header from './Header'
import Recos from './Recos'
import Aside from './Aside'
import Footer from './Footer'
import '../styles/styles.css'
const Homepage = () => {
  return (
    <>
      <Header />
      <Recos />
      <Aside />
      <Footer />
    </>
  )
}

export default Homepage