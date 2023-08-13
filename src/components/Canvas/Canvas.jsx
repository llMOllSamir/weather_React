import React, { useEffect, useState } from "react";
import styles from "./Canvas.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["12:00 AM", "05:00 AM", "12:00 pm", "05:00 PM", "10:00 PM"];
let regex = /^(00:00|05:00|12:00|17:00|22:00)/;

export default function Canvas({ labelName, dataInput, dayIndex }) {
  const [myData, setdata] = useState([]);

  useEffect(() => {
    let hour = dataInput?.forecast?.forecastday[dayIndex].hour;
    let x = hour.filter((ele) => regex.test(ele.time.split(" ")[1]));
    setdata([...x]);
  }, [dataInput,dayIndex]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text:labelName?.label,
        color:"white",
        font:{
            size:18,
        }
      },
    },
 
    scales: {
      x: {
        grid: {
          display: false,
          offset: true, 
          beginAtZero: false,
        },
        ticks: {
          color: "white",
          font: { size: 12 },
          backdropmargin:50
        },
              },
      y: {
        min: Math.min(...myData.map((ele) => Math.round( labelName?.key==="c"?ele.temp_c:ele.wind_kph
        ))) - 1,
        max: Math.max(...myData.map((ele) => Math.round(labelName?.key==="c"?ele.temp_c:ele.wind_kph))) + 1,
        grid: {
          display: false,
        },
        ticks: {
          color: "rgba(42, 42, 121,1)",
          font: { size: 16 },
          callback: (value) => `${value} ${labelName?.key==="c"?"°C":"k/h"}`, // Add the degree symbol after the value
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: myData && myData.map((ele) => Math.round(labelName?.key==="c"?ele.temp_c:ele.wind_kph)),
        label:labelName?.key==="c"?"°C":"K/H",
        borderColor: "goldenrod",
        backgroundColor: "blue",
        pointRadius: 6,
      },
    ],
  };
  return (
    <React.Fragment>
      <Line options={options} data={data} className={styles.canvas} />
    </React.Fragment>
  );
}
