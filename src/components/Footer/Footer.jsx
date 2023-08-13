import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  let links = [
    {
      class: " bg-primary text-light",
      link:"fa-linkedin-in",
      src: "https://www.linkedin.com/in/mohamed-samir-a7693b274/",
    },
    {
      class: " text-light bg-secondary",
      link:"fa-github  ",
      src: "https://github.com/llMOllSamir",
    },
    {
      class: "bg-primary text-light",
      link:"fa-facebook-f ",
      src: "https://www.facebook.com/profile.php?id=100082859111033",
    },
    {
      class: " bg-danger text-warning",
      link:"fa-maxcdn",
      src: "https://mohamed-elshami.vercel.app/",
    },
  ];

  return (
    <footer className={`${styles.footer} py-5 `}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.logo}>
              <img src={logo} alt="" /> Lightning
            </h2>
            <p className={styles.paragraph}>
              "Stay Informed with Lightning: Your Source for Real-time Weather
              Updates!"
            </p>
            <p>" We Work Hard For Make it Easy For You "</p>
          </div>
          <div className="col-md-6 text-center">
            <h2 className={styles.logo}>Contact Us</h2>
            <div className={styles.link} >
            {links.map((ele,index)=><React.Fragment>
              <Link target="__blank" className={ele.class}  key={index} to={ele.src}><i className={`fa-brands ${ele.link}`}></i></Link>
            </React.Fragment>)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
