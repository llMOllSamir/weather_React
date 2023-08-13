import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import logo from "../../images/logo.png";
export default function Contact() {




 
  return (
    <React.Fragment>
      <section className={`${styles.section}`}>
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6 ">
              <div className={styles.logo}>
                <img src={logo} alt="" />
                <h1 className="text-warning">Lightning</h1>
              </div>
              <p className={styles.paragraph}>
                Welcome to Lightning, your one-stop
                destination for accurate and up-to-date weather predictions.
                Whether you're planning a weekend getaway, a business trip, or
                just curious about the weather in your area, we've got you
                covered. Our dedicated team of meteorologists works tireless  ly
                to provide you with the most reliable forecasts, using the
                latest technology and data analysis techniques. From temperature
                trends and precipitation probabilities to wind speeds and
                atmospheric conditions
              </p>
            </div>
            <div className="col-md-6 ">
              <form className=" w-75 mx-auto">
                <h2 className="mb-4 text-warning">Get In Touch</h2>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="form-control my-3"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-control my-3"
                />
                <textarea
                  className={`form-control ${styles.textArea}`}
                  rows={5}
                  placeholder="Message"
                  name="message"
                ></textarea>
                <button
                  type="button"
                  className={styles.btn + " btn btn-primary mt-3 px-5"}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
