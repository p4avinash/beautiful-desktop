import React, { Component } from "react";

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
    };
  }

  render() {
    const { counter } = this.props;
    var index = counter;

    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((response2) => {
        this.setState({
          quote: `${response2[index].text} - ${response2[index].author}`,
        });
        return `${response2[index].text} - ${response2[index].author}`;
      });

    return (
      <div>
        <h5>{this.state.quote}</h5>
      </div>
    );
  }
}

export default Quote;
