import React from "react";
import "./greeting.css";
import Clock from "../clock/clock";
import Quote from "../quotes/quote";

const Greeting = () => {
  var d = new Date();
  // var second= d.gethour();
  // var minute = d.getMinutes();
  var hour = d.getHours();
  var greet = "";
  const name = "Avinash";
  //flag for changing the quotes every morning,afternoon and evening.
  var counter = 0;

  //setting the clock so that it can greet accordingly
  if (hour > 4 && hour < 12) {
    greet = "Good Morning";
    counter += 1;
  } else if (hour >= 12 && hour < 16) {
    greet = "Good Afternoon";
    counter += 1;
  } else if (hour >= 16 && hour < 20) {
    greet = "Good Evening";
    counter += 1;
  } else {
    greet = "Good Night";
  }

  return (
    <div className="greeting">
      <Clock />
      <h2 className="greet-with-name">{`${greet}, ${name}`}</h2>
      <br />
      <Quote counter={counter} />
    </div>
  );
};

export default Greeting;
