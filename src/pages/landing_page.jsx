import React, { useState, useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import axios from "axios";

const Chart = () => {
  const [chart, setChart] = useState();
  const [dataPoints, setDataPoint] = useState([]);
  const options = {
    theme: "light2",
    title: {
      text: "Stock Price of NIFTY 50",
    },
    axisY: {
      title: "Price in USD",
      prefix: "$",
    },
    data: [
      {
        type: "line",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.00",
        dataPoints: dataPoints,
      },
    ],
  };

  //static.dribbble.com/users/1863078/screenshots/7052720/downloads/edu_app.png
  useEffect(() => {
    const fetchData = async () => {
      let object = null;
      await axios.get("https://api.covid19api.com/summary").then((res) => {
        console.log("res", res.data);
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <CanvasJSChart options={options} onRef={(ref) => setChart(ref)} />
    </div>
  );
};
export default Chart;
