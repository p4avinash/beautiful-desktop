import React from "react";
import "./App.css";
import "./index.css";
import Greeting from "./components/greeting/greeting";

function App() {
  const rootElement = document.getElementById("appBackground");

  fetch("https://source.unsplash.com/user/erondu/1600x900").then(
    (response) => (rootElement.style.backgroundImage = `url('${response.url}')`)
  );

  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
