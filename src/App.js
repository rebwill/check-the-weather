import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Weather from "./components/weather";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: []
    };
  }

  componentDidMount() {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=5b42e62dd43941e18fd195730191712&q=33139"
    )
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            weather: data.current
          });
          console.log(this.state.weather); // logs correctly here
          console.log(this.state.weather.current.cloud); // logs correctly here
        },
        error => {
          console.log(error);
        }
      );
    // .catch(console.log);
    console.log(this.state.weather); // returns an empty array
  }

  render() {
    const weatherObj = this.state.weather;
    console.log(weatherObj); // weatherObj logs correctly here
    return (
      <div>
        <h1>Current weather in Key Largo</h1>
        <p>
          Temp in F:
          {/* {weatherObj.current.cloud} */}
        </p>
        {/* ^returns undefined */}
      </div>
    );
  }
}

export default App;
