import React from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import FormField from "../component_Form_Field/form";
import Styles from "./section.module.css";
class Section extends React.Component {
  state = {
    options: {
      chart: {
        id: "covid_19_cases",
        backgrounfColor: "black",
        foreColor: "#ff0000",
        stacked: true,
      },
      xaxis: {
        categories: [],
      },

      dataLabels: {
        enabled: true,
      },
      title: {
        text: `covid-19 Global summary`,
        align: "center",
        style: {
          fontSize: "25px",
        },
      },
    },
    series: [],
    countries: null,
    data: "",
    global: null,
    type: "area",
  };

  handleFormData = ({ target }) => {
    this.setState({ data: target.value });
  };

  updateChart = () => {
    const { data, countries, global } = this.state;
    let randomType = ["line", "area"];
    if (data) {
      let newSeries = [];
      let searchedSlug = countries.filter(({ Slug }) => {
        return Slug === data;
      });
      if (searchedSlug) {
        const [countryObject] = searchedSlug;
        for (let value in countryObject) {
          if (Object.keys(global).includes(value))
            newSeries.push(countryObject[value]);
        }
        let types = randomType[Math.floor(Math.random() * randomType.length)];
        ApexCharts.exec("covid_19_cases", "updateSeries", [
          {
            data: newSeries,
            type: types,
          },
        ]);
      }
    }
  };
  handleFocus = () => {
    this.setState({ data: "" });
  };
  fetchData = async () => {
    let arr = [];
    await axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        const { Global, Countries } = res.data;
        this.setState({ countries: Countries });
        this.setState({ global: Global });

        arr.push({
          name: "population",
          data: Object.values(Global),
          type: "area",
        });

        this.setState({
          options: {
            ...this.state.options,
            xaxis: {
              ...this.state.options.xaxis,
              categories: Object.keys(Global),
            },
          },
          series: arr,
        });
      })
      .catch((err) => console.log("err.respond", err.response));
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProp, prevState) {
    this.updateChart();
  }

  render() {
    const { wrapper, formfield } = Styles;
    const { type } = this.state;
    return (
      <div className={wrapper}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type={type}
          width={"100%"}
          height={320}
        />
        <div className={formfield}>
          <FormField
            handleCountries={this.handleFormData}
            data={this.state.data}
            countries={this.state.countries}
            reset={this.handleFocus}
          />
        </div>
      </div>
    );
  }
}

export default Section;
