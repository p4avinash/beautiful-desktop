import React, { Component } from "react";
import "./clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    // this.state = { time: Date.now() };
    this.state = {
      time: Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();

    return (
      <div className="clock">
        {/* <h1>{this.state.time}</h1> */}
        <h1>{`${hour}:${minutes}`}</h1>
      </div>
    );
  }
}

export default Clock;
