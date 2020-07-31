import React from "react";
import "./greeting.css";
import Clock from "../clock/clock";
import Quote from "../quotes/quote";

const Greeting = () => {
  var d = new Date();
  var hour = d.getHours();
  var greet = "";
  const name = "Avinash";
  //flag for changing the quotes every morning,afternoon and evening.
  var counter = 0;

  //setting the clock so that it can greet accordingly
  if (hour < 12 && hour > 4) {
    greet = "Good Morning";
    counter += 1;
  } else if (hour > 12 && hour < 17) {
    greet = "Good Afternoon";
    counter += 1;
  } else if (hour > 17 && hour < 19) {
    greet = "Good Evening";
    counter += 1;
  } else {
    greet = "Good Night";
  }

  return (
    <div className="greeting">
      <h1>{`${greet}, ${name}`}</h1>
      <Clock />
      <Quote counter={counter} />
    </div>
  );
};

export default Greeting;
