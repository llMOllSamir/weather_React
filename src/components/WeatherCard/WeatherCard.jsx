import React from "react";
import styles from "./WeatherCard.module.css";
import { useSelector } from "react-redux";

export default function WeatherCard({ index, ele, setdayIndex }) {
  let { lang } = useSelector((state) => state.weather);

  let week = {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    ar: [
      "الاحد",
      "الاثنين",
      "الثلاثاء",
      "الاربعاء",
      "الخميس",
      "الجمعه",
      "السبت",
    ],
  };
  return (
    <React.Fragment>
      <div
        className="col-12 col-xl-11 mx-auto"
        onClick={() => {
          setdayIndex(index);
        }}
      >
        <div
          className="row h-100 alert alert-primary   align-items-center"
          style={{ cursor: "pointer" }}
        >
 
              <div className="col-4  text-center">
                <img
                  className="img-fluid "
                  src={ele.day.condition.icon}
                  alt=""
                />
                <p>{ele.day.condition.text}</p>
              </div>
              <div className="col-8">
                <div className="row h-100 ">
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    {" "}
                    <h6>{ele.date}</h6>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <h5>{week[lang][new Date(ele.date).getDay()]}</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <p className="text-muted m-0">
                      <span>{ele.day.maxwind_kph} k/h </span>
                      <i className="fa-solid fa-wind"></i>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted m-0">
                      <span>{ele.day.avgtemp_c} °C</span>{" "}
                      <i className="fa-solid fa-temperature-three-quarters"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
      </div>
    </React.Fragment>
  );
}
