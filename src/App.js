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
            weather: data
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
          <div className="background-container">
            <div className="content-container">
              <form onSubmit={this.handleSubmit} className="zipcode-form">
                <h2>
                  Enter a US zipcode here to get current weather conditions.
                </h2>
                <input
                  className="input-field"
                  type="text"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
                <input className="submit-btn" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      );
    } else if (isLoaded && weather) {
      return (
        <div>
          <Navbar />
          <div className="background-container">
            <div className="content-container">
              <form onSubmit={this.handleSubmit} className="zipcode-form">
                <h2>
                  Enter a US zipcode here to get current weather conditions.
                </h2>
                <input
                  className="input-field"
                  type="text"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
                <input className="submit-btn" type="submit" value="Submit" />
              </form>
              <div className="results-box">
                <h2>
                  Here's what it's doing in {weather.location.name},{" "}
                  {weather.location.region}:
                </h2>
                <p>
                  <strong>Temperature: </strong>
                  {weather.current.temp_f}°F
                  <br />
                  <strong>Humidity: </strong>
                  {weather.current.humidity}%<br />
                  <strong>Feels like: </strong>
                  {weather.current.feelslike_f}°F
                  <br />
                  <strong>Wind speed: </strong>
                  {weather.current.wind_mph} mph
                  <br />
                  <strong>Wind gust speed: </strong>
                  {weather.current.gust_mph} mph
                  <br />
                  <strong>Wind direction: </strong>
                  {weather.current.wind_dir}
                  <br />
                  <strong>Cloud cover: </strong>
                  {weather.current.cloud}%<br />
                  <strong>Precipitation: </strong>
                  {weather.current.precip_in} inches
                </p>
              </div>
            </div>
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
