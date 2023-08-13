import React from 'react'
import styles from "./IsLoading.module.css"
import logo from '../../images/logo.png'

export default function IsLoading() {
  return (
    <React.Fragment>
      <div className={styles.loading}><img src={logo} alt="Logo" /></div>
    </React.Fragment>
  )
}
