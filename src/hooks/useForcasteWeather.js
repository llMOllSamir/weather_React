import axios from "axios";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

export let useForcasteWeather = ({ onSuccess }) => {
  let { lang, city } = useSelector((state) => state.weather);
  
  let apiKey = "9868a68e1d8c4ba7947200831231802";
  let baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&lang=${lang}&days=6`;
  let getData = async () => {
    return await axios.get(baseUrl);
  };
  return useQuery("forecast", getData, {
    enabled: false,
    select: (data) => {
      let newData = data.data;
      return newData;
    },
    onSuccess,
   });
};



