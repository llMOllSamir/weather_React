import React from 'react'
import styles from "./Notfound.module.css"
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
export default function Notfound() {
   return (
    <div className={styles.notFound}>
      <div className="container">
      <div className="row gy-2">
      <div className="col-12 d-flex align-items-center">
        <img src={logo} alt="" />
      <h1>Page Not Found </h1></div>
      </div>
     <div className="col-12 mt-5 text-center">
     <Link className='btn btn-warning btn-lg '  to={"/"}>Home</Link>
     </div>
      </div>
    </div>
  )
}
