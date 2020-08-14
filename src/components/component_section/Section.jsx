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
        foreColor: "#ff0000",
      },
      xaxis: {
        categories: [],
        show: true,
      },
      yaxis: {
        showAlways: true,
        labels: {
          text: "heading",
        },
      },
      dataLabels: {
        enabled: true,
      },
      title: {
        text: `Covid-19 Global Daily Summary`,
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
    globalTitle: "",
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
            name: data,
            data: newSeries,
            type: types,
          },
        ]);
        ApexCharts.exec("covid_19_cases", "updateOptions", {
          title: {
            text: `Covid-19 ${data.toUpperCase()} Daily Summary`,
          },
        });
      }
    }
  };
  handleFocus = () => {
    this.setState({ data: "" });
  };

  handleGlobalSummary = () => {
    const { type, global } = this.state;

    ApexCharts.exec("covid_19_cases", "updateSeries", [
      {
        name: "Global summary",
        data: Object.values(global),
        type: type,
      },
    ]);

    ApexCharts.exec("covid_19_cases", "updateOptions", {
      title: {
        text: `Covid-19 GLOBAL Daily Summary`,
      },
    });
    this.setState({
      globalTitle: "Global Summary",
      data: "",
    });
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
          globalTitle: "Global Summary",
        });
        ApexCharts.exec("covid_19_cases", "updateSeries", [
          {
            name: "Global Summary",
          },
        ]);
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
    const { type, data, globalTitle } = this.state;
    return (
      <div className={wrapper}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type={type}
          width={"100%"}
          height={320}
          title={
            data
              ? `${data.substr(0, 1).toUpperCase()}${data.slice(1)} Summary`
              : globalTitle
          }
        />
        <div className={formfield}>
          <FormField
            handleCountries={this.handleFormData}
            data={this.state.data}
            countries={this.state.countries}
            reset={this.handleFocus}
            handleGlobalSummary={this.handleGlobalSummary}
          />
        </div>
      </div>
    );
  }
}

export default Section;
