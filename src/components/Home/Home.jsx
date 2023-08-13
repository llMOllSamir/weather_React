import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import HomeSection from "../HomeSection/HomeSection";
import { useDispatch, useSelector } from "react-redux";
import { useForcasteWeather } from "../../hooks/useForcasteWeather";
import IsLoading from "../IsLoading/IsLoading";
import { setLastSearch } from "../../Redux/weatherSlice";
import Canvas from "../Canvas/Canvas";
import WeatherCard from './../WeatherCard/WeatherCard';

export default function Home() {
  const [labelName, setlabelName] = useState(null);
  const [dayIndex, setdayIndex] = useState(0);
  const [language, setlanguage] = useState("en");
  let canvas = useRef()

  let climate = [
    { label: ["Temperature", "درجه الحراره"], key: "c" },
    { label: ["Wind", "الرياح"], key: "w" },
  ];

  let langSwitch = (arr) => {
    return lang === "en" ? arr[0] : arr[1];
  };
  
  let { lang, city } = useSelector((state) => state.weather);
  let dispatch = useDispatch();

  let onSuccess = (data) => {
    dispatch(setLastSearch(data.location.name));
    setTimeout(()=>{window.scrollTo(0,canvas.current.offsetTop)},10)
  };


  let { isLoading, data, isError, refetch } = useForcasteWeather({
    onSuccess,
   });

  useEffect(() => {
    setlabelName({ label: langSwitch(climate[0].label), key: climate[0].key });
    if (city !== "") {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (lang !== language) {
      setlanguage(lang);
      if (city !== "") {
        refetch();
      }
    }
    setlabelName({ label: langSwitch(climate[0].label), key: climate[0].key });
  }, [lang]);

  

  return (
    <React.Fragment>
      <HomeSection refetch={refetch} />
      {isLoading ? <IsLoading /> : <></>}
      {isError && (
        <h2 className="alert alert-primary text-danger ">
          Check Connection <i className="fa-solid fa-wifi fa-beat-fade"></i>
        </h2>
      )}
      {data && (
        <React.Fragment>
          <div ref={canvas} className="container-fluid my-5">
            <div className="row gy-5 align-items-center">
              <div className="col-12 text-center ">
                <h5>
                  <span className="me-3">City :</span>
                  <span>
                    {data.location.name} , {data.location.country}
                  </span>
                </h5>
                <h5>
                  <span>Date : </span>
                  <span>
                    {data.location.localtime.split(" ")[0]} ,{" "}
                    {data.location.localtime.split(" ")[1]}
                  </span>
                </h5>
                <h6 className="w-25 mx-auto border-bottom border-1 border-warning ">
                  {}
                </h6>
              </div>
              <div className=" col-lg-9  ">
                <div className={styles.analyes}>
                  <ul>
                    {climate.map((ele, index) => (
                      <li
                        onClick={() => {
                          setlabelName({
                            label: langSwitch(ele?.label),
                            key: ele.key,
                          });
                        }}
                        key={index}
                      >
                        {langSwitch(ele?.label)}
                      </li>
                    ))}
                  </ul>
                  <Canvas
                    labelName={labelName}
                    dayIndex={dayIndex}
                    dataInput={data}
                  />
                </div>
              </div>
              <div className=" col-lg-3  ">
                <div className="row gy-2 px-5   ">
                  {data.forecast.forecastday.map((ele, index) => (
                    <WeatherCard ele={ele} setdayIndex={setdayIndex} key={index} index={index}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
