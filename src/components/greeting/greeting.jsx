import React from "react";
import "./greeting.css";
import Clock from "../clock/clock";

const Greeting = () => {
  var d = new Date();
  var hour = d.getHours();
  var greet = "";
  const name = "Avinash";

  if (hour < 12 && hour > 4) {
    greet = "Good Morning";
  } else if (hour > 12 && hour < 17) {
    greet = "Good Afternoon";
  } else if (hour > 17 && hour < 19) {
    greet = "Good Evening";
  } else {
    greet = "Good Night";
  }

  return (
    <div className="greeting">
      <h1>{`${greet}, ${name}`}</h1>
      <Clock />
    </div>
  );
};

export default Greeting;
