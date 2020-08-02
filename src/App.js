import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Greeting from "./components/greeting/greeting";
import Weather from "./components/weather/weather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
    };
  }

  render() {
    const rootElement = document.getElementById("appBackground");

    fetch("https://source.unsplash.com/user/erondu/1600x900").then(
      (response) =>
        (rootElement.style.backgroundImage = `url('${response.url}')`)
    );

    return (
      <div className="App">
        <Weather />
        <Greeting />
      </div>
    );
  }
}

export default App;
