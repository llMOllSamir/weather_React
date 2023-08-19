import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./GeoLocation.module.css";
import { useQuery } from "react-query";
import axios from "axios";
import { setCity } from "../../Redux/weatherSlice";
import { useGeolocated } from "react-geolocated";
import { useDispatch, useSelector } from "react-redux";

let useCityLocation = (lat, lon, onSuccess) => {
  let getCity = async () => {
    let apiKey = "1d05323ec5be487e9c3e873bb706ddc4";
    return await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}+${lon}&pretty=1`
    );
  };
  return useQuery(`location`, getCity, {
    enabled: false,
    onSuccess,
  });
};

export default function GeoLocation({ refetch }) {
  const [lat, setlat] = useState();
  const [lon, setlon] = useState();

  let dispatch = useDispatch();

  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    watchPosition: true,
    onSuccess: (data) => {
      setlat(data.coords.latitude);
      setlon(data.coords.longitude);
      setTimeout(() => {
        if (!localStorage.getItem("history")) {
          refetchCity();
        }
      }, 10);
    },
  });

  let onSuccess = (datas) => {
    let { data } = datas;
    dispatch(setCity(data.results[0].components.state));

    setTimeout(() => {
      refetch();
    }, 10);
  };

  let { refetch: refetchCity } = useCityLocation(lat, lon, onSuccess);

  return <React.Fragment></React.Fragment>;
}
