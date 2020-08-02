import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      logo: "",
      desc: "",
    };
  }

  componentDidMount() {
    const city = "muzaffarpur";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=329f835db283cc9f631909eb8ec904eb`
    )
      .then((response) => response.json())
      .then((response2) => {
        //getting the temperature
        let inCelcius = response2["main"].temp;
        inCelcius = inCelcius - 273.15;
        //getting the logo
        let image = `http://openweathermap.org/img/wn/${response2["weather"][0].icon}@2x.png`;
        //getting the description
        let description = response2["weather"][0].description;
        //setting the state
        this.setState({ temp: inCelcius, logo: image, desc: description });
      });
  }

  render() {
    return (
      <div className="weather">
        <img className="logo" src={this.state.logo} alt="logo" />
        <h3 className="temp">{`${
          this.state.temp
        } °C, ${this.state.desc.toUpperCase()} `}</h3>
      </div>
    );
  }
}

export default Weather;
