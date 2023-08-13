import React, { useEffect, useLayoutEffect } from 'react'
import styles from "./Layout.module.css"
 import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'

export default function Layout( ) {

  
  return (
    < >
    <NavBar   />
    <div className={styles.routs} >
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
