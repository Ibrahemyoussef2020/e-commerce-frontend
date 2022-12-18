import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
import Aside from './navAside'

function LayOut() {
  return (
    <>
    <Header />
        <Aside/>
        <Outlet />
    <Footer />
    </>
  )
}

export default LayOut