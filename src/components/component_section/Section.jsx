import React from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import FormField from "../component_Form_Field/form";
import Styles from "./section.module.css";
import Ranked from "../component_rank/Rank";
class Section extends React.Component {
  state = {
    options: {
      chart: {
        id: "covid_19_cases",
        foreColor: "rgb(241, 237, 236)",
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
          fontSize: "16px",
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
      let foundSlug = countries.filter(({ Slug }) => {
        return Slug === data;
      });
      if (foundSlug) {
        const [countryObject] = foundSlug;
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
    const { wrapper, formfield, chart, starRank } = Styles;
    const { type, data, globalTitle, countries, options, series } = this.state;
    return (
      <div className={wrapper}>
        <div className={formfield}>
          <FormField
            handleCountries={this.handleFormData}
            data={data}
            countries={countries}
            reset={this.handleFocus}
            handleGlobalSummary={this.handleGlobalSummary}
          />
        </div>
        <div className={chart}>
          <Chart
            options={options}
            series={series}
            type={type}
            width={"230%"}
            height={320}
            title={
              data
                ? `${data.substr(0, 1).toUpperCase()}${data.slice(1)} Summary`
                : globalTitle
            }
          />
        </div>
        <div className={starRank}>
          <Ranked data={data} />
        </div>
      </div>
    );
  }
  // https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-08-01T00:00:00Z&to=2020-08-14T00:00:00Z
}

export default Section;
