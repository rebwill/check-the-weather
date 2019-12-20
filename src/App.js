import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./styles/index.scss";
// import logo from "./logo.svg";
// import "./App.css";
// import Weather from "./components/weather";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      weather: [],
      zipCode: 0
    };
  }

  handleChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  handleSubmit = e => {
    // alert("A zipcode was submitted: " + this.state.zipCode);
    e.preventDefault();
    this.fetchWeather();
  };

  fetchWeather = () => {
    let zipCodeParam = this.state.zipCode;
    console.log(this.state.zipCode);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=5b42e62dd43941e18fd195730191712&q=${zipCodeParam}`
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
  };

  render() {
    const { error, isLoaded, weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Navbar />
          <div className="container">
            <form onSubmit={this.handleSubmit} className="zipcode-form">
              <div className="form-info">
                Enter a US zipcode here to get current weather conditions.
              </div>
              <label>
                US Zipcode:
                <input
                  type="text"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    } else if (isLoaded && weather) {
      return (
        <div>
          <Navbar />
          <div className="container">
            <h1>Here's the weather you requested:</h1>
            <p>
              Temperature: {weather.temp_f} °F
              <br />
              Humidity: {weather.humidity}%<br />
              Feels like: {weather.feelslike_f} F
              <br />
              Wind speed: {weather.wind_mph} mph
              <br />
              Wind gusts speed: {weather.gust_mph} mph
              <br />
              Wind direction: {weather.wind_dir}
              <br />
              Cloud cover: {weather.cloud}%<br />
              Precipitation: {weather.precip_in} inches
            </p>
            <h1>Want to check another location?</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                US Zipcode:
                <input
                  type="text"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <p>Please enter a valid US zipcode.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              US Zipcode:
              <input
                type="text"
                value={this.state.zipCode}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default App;

// {weather.temp_f}
