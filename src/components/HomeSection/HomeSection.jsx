import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeSection.module.css";
import logo from "../../images/logo.png";
import { clearHistory, setCity } from "../../Redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../../hooks/useSearch";

export default function HomeSection({ refetch }) {
   let input = useRef();
  let label = useRef();
  let dispatch = useDispatch();
  let { lastSearch,lang } = useSelector((state) => state.weather);

  let onSuccess = (data) => {
    if(data.data.length >0){
    dispatch(setCity(data.data[0].name));
      setTimeout(() => {
        refetch()
      }, 10);
    }
  };

  let {
    isLoading,
    mutate
  } = useSearch( onSuccess);

  // handle Input Escape Search
  let escapeInput = (e) => {
    if (e.key === "Escape") {
      input.current.blur();
    } else if (e.key === "Enter") {
       if (input.current.value.length > 3) {
        mutate(input.current.value);
       }
    } else {
      return;
    }
  };

  let handelClick = () => {
    if (input.current.value.length > 3) {
      mutate(input.current.value);
     }
  };



  return (
    <React.Fragment>
      <section
        className={`${styles.section}`}
      >
        <div className="container">
          <div className={`${styles.input}`}>
            <h1 className="text-warning">
              <img src={logo} alt="" /> Lightning
            </h1>
            <label ref={label} htmlFor="search">
              <i className="fa-solid fa-search"></i>

              <input
                onKeyUp={escapeInput}
                ref={input}
                type="text"
                id="search"
                placeholder="Search"
              />
              <button className={styles.btn} onClick={handelClick}>{isLoading?<i className="fa-solid fa-spinner fa-spin bg-transparent"></i>: lang==="en"?"Find":"بحث"}</button>
            </label>  

            <h5 className={`${styles.history}`}>
              {lastSearch.length > 0 && (
                <React.Fragment>
                  {lastSearch.map((ele, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        dispatch(setCity(ele));
                        input.current.value = ele;
                        setTimeout(() => {
                          refetch()
                        }, 10);
                      }}
                    >
                      {ele}
                    </span>
                  ))}
                  <button
                  className="btn btn-outline-warning btn-sm"
                    onClick={() => {
                      localStorage.removeItem("history");
                      dispatch(clearHistory());
                    }}
                  >
                    <i className="fa-solid fa-close" ></i>
                  </button>
                </React.Fragment>
              )}
            </h5>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
