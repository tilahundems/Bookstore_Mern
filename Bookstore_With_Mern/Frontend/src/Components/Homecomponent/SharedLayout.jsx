import React from 'react'
import Navbar_cust from '../Utilities/Navbar_cust'
import { Outlet } from 'react-router-dom'
import Footer from '../Utilities/Footer'

function SharedLayout() {
  return (
 <>
        <Navbar_cust />
        <Outlet />
        <Footer/>

 </>
  )
}

export default SharedLayout