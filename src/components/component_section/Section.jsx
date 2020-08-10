import React from "react";
import axios from "axios";
import { CanvasJSChart, CanvasJS } from "canvasjs-react-charts";
import CustomInput from "../component_input/Input";

const dataPoints = [];
class Section extends React.Component {
  state = {
    cases: "",
    country: "",
    data: [],
  };

  options = {
    theme: "light1",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Daily change of covid19",
    },
    axisX: {
      valueFormatString: "DD MMM YYYY",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "numbers of cases",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return CanvasJS.formatNumber(e.value, "##0.00");
          // prefix: "$",
        },
      },
    },
    data: [
      {
        type: "area",
        xValueFormatString: "DD MMM YYYY",
        yValueFormatString: "#,##0.##",
        dataPoints: dataPoints,
      },
    ],
  };
  handleCasesChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  fetchData = async () => {
    let chart = this.chart;
    await axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        this.setState({ data: res.data });
        const { Countries } = res.data;
        let respond =
          Countries &&
          Countries.filter((value) => {
            let result = value.Slug === "nigeria";
            return result;
          });
        respond.map(({ NewConfirmed, Date: date }) => {
          let x = new Date(date);
          let y = NewConfirmed;
          return dataPoints.push({ x, y });
        });
        chart.render();
      })
      .catch((err) => console.error(err));
  };

  updateGraph = () => {};
  componentDidMount() {
    this.fetchData();
    this.setState({ cases: "NewConfirmed", country: "nigeria" });
  }

  render() {
    const { cases, country, data } = this.state;

    return (
      <div>
        <form>
          <CustomInput
            list={"case"}
            name={"cases"}
            value={cases}
            onChange={this.handleCasesChange}
          />
          <datalist id="case">
            <option value="NewConfirmed">NewConfirmed</option>
            <option value="NewDeaths">NewDeaths</option>
            <option value="NewRecovered">NewRecovered</option>
          </datalist>
          <CustomInput
            list={"country"}
            name={"country"}
            value={country}
            onChange={this.handleCasesChange}
          />

          <datalist id="country">
            {data.Countries &&
              data.Countries.map(({ Slug }, index) => (
                <option value={Slug} key={index}>
                  {Slug}
                </option>
              ))}
          </datalist>
        </form>
        <section>
          <div>
            <CanvasJSChart
              options={this.options}
              onRef={(ref) => (this.chart = ref)}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Section;
