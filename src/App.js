import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Weather from "./components/weather";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
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
            isLoaded: true,
            weather: data.current
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    const { error, isLoaded, weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>Temp in F: {weather.temp_f}</p>
        </div>
      );
    }
  }
}

export default App;
