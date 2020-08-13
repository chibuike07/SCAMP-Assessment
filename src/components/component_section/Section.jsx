import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

const Section = () => {
  const [countries, setCountries] = useState(null);
  const [chartOptions, setOption] = useState({
    options: {
      chart: {
        id: "covid_19_cases",
        backgrounfColor: "black",
        foreColor: "#ff0000",
      },
      xaxis: {
        categories: [],
      },

      dataLabels: {
        enabled: true,
      },
      title: {
        text: "covid summary",
        align: "center",
        style: {
          fontSize: "25px",
        },
      },
    },
    series: [],
  });

  const handleCountries = () => {};
  useEffect(() => {
    const fetchData = async () => {
      let arr = [];
      await axios
        .get("https://api.covid19api.com/summary")
        .then((res) => {
          const { Global, Countries } = res.data;
          setCountries(Countries);
          arr.push({
            name: "population",
            data: Object.values(Global),
          });
          setOption({
            options: {
              ...chartOptions.options,
              xaxis: {
                ...chartOptions.options.xaxis,
                categories: Object.keys(Global),
              },
            },
            series: arr,
          });
          return;
        })
        .catch((err) => console.log("err.respond", err.response));
    };
    fetchData();
  }, [chartOptions.options, chartOptions.series]);
  return (
    <div>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="line"
        width={"100%"}
        height={320}
      />
    </div>
  );
};

export default Section;
