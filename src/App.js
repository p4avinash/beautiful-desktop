import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Greeting from "./components/greeting/greeting";
import Weather from "./components/weather/weather";
import Todo from "./components/todo/todo";
import Scroll from "./components/scroll/scroll";

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
      <div className="App" onLoad={this.setInfo}>
        <div className="weather-and-todo">
          <Weather location={this.state.location} />
          <Scroll>
            <Todo />
          </Scroll>
        </div>

        <Greeting />
      </div>
    );
  }
}

export default App;
