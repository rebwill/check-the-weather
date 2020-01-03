import React, { Component } from "react";
import "../styles/index.scss";
import InputForm from "./inputForm";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      weather: [],
      zipCode: "",
      btnLeft: "toggle-active-dark",
      btnRight: "toggle-inactive-light",
      tempScale: "fahrenheit"
    };
  }

  // FOR GETTING WEATHER

  // 1) set input value as zipcode in state
  handleChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  // 2) trigger fetchWeather when submit button is clicked
  handleSubmit = e => {
    e.preventDefault();
    this.fetchWeather();
  };

  // 3) get the weather for that zipcode
  fetchWeather = () => {
    let zipCodeParam = this.state.zipCode;
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5b42e62dd43941e18fd195730191712&q=${zipCodeParam}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(
        data => {
          this.setState({
            isLoaded: true,
            weather: data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error);
        }
      );
  };

  // FOR TOGGLING F/C

  // click btn-left = make Fahrenheit:  Change this.state.btnLeft --> "toggle-active-dark"
  //                                    Change this.state.btnRight --> "toggle-inactive-light"

  makeFahrenheit = e => {
    e.preventDefault();
    this.setState({
      btnLeft: "toggle-active-dark",
      btnRight: "toggle-inactive-light",
      tempScale: "fahrenheit"
    });
  };

  // click btn-right = make Celsius:    Change this.state.btn-left --> "toggle-inactive-light"
  //                                    Change this.state.btn-right --> "toggle-active-dark"

  makeCelsius = e => {
    e.preventDefault();
    this.setState({
      btnLeft: "toggle-inactive-light",
      btnRight: "toggle-active-dark",
      tempScale: "celsius"
    });
  };

  render() {
    const {
      error,
      isLoaded,
      weather,
      btnLeft,
      btnRight,
      tempScale
    } = this.state;

    // error catch
    if (error) {
      return (
        <div>
          <div className="background-container">
            <div className="alert alert-warning" role="alert">
              That ain't no zipcode, partner. Please enter a valid 5-digit US
              zipcode.
            </div>
            <div className="content-container">
              <a className="btn app-btn-white" href="/">
                Try again
              </a>
            </div>
          </div>
        </div>
      );
    }

    // if API data has NOT been loaded, show only the input form
    else if (!isLoaded) {
      return (
        <div>
          <div className="background-container">
            <div className="content-container">
              <form onSubmit={this.handleSubmit} className="zipcode-form">
                <h2>
                  Enter a 5-digit US zipcode here to get current weather
                  conditions.
                </h2>
                <input
                  className="input-field"
                  type="number"
                  required
                  minLength="5"
                  maxLength="5"
                  value={this.state.zipCode}
                  onChange={this.handleChange}
                />
                <input className="app-btn" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      );
    }

    // // if api data HAS been loaded BUT there is an error:
    // else if (isLoaded && !weather) {
    //   return <div>Error: {error.message}</div>;
    // }

    // if api data HAS been loaded *AND* weather is populated, display the input form AND the results
    else if (isLoaded && weather) {
      if (tempScale === "fahrenheit") {
        return (
          <div>
            <div className="background-container">
              <div className="content-container">
                <form onSubmit={this.handleSubmit} className="zipcode-form">
                  <h2>
                    Enter a 5-digit US zipcode here to get current weather
                    conditions.
                  </h2>
                  <input
                    className="input-field"
                    type="number"
                    required
                    minLength="5"
                    maxLength="5"
                    value={this.state.zipCode}
                    onChange={this.handleChange}
                  />
                  <input className="app-btn" type="submit" value="Submit" />
                </form>
                <div className="results-box">
                  <h2>
                    Here's what it's doing in {weather.location.name},{" "}
                    {weather.location.region}:
                  </h2>
                  <button
                    onClick={this.makeFahrenheit}
                    type="button"
                    className={"btn btn-left " + btnLeft}
                  >
                    Fahrenheit
                  </button>
                  <button
                    onClick={this.makeCelsius}
                    type="button"
                    className={"btn btn-right " + btnRight}
                  >
                    Celsius
                  </button>
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
      }
      if (tempScale === "celsius") {
        return (
          <div>
            <div className="background-container">
              <div className="content-container">
                <form onSubmit={this.handleSubmit} className="zipcode-form">
                  <h2>
                    Enter a 5-digit US zipcode here to get current weather
                    conditions.
                  </h2>
                  <input
                    className="input-field"
                    type="number"
                    required
                    minLength="5"
                    maxLength="5"
                    value={this.state.zipCode}
                    onChange={this.handleChange}
                  />
                  <input className="app-btn" type="submit" value="Submit" />
                </form>
                <div className="results-box">
                  <h2>
                    Here's what it's doing in {weather.location.name},{" "}
                    {weather.location.region}:
                  </h2>
                  <button
                    onClick={this.makeFahrenheit}
                    type="button"
                    className={"btn btn-left " + btnLeft}
                  >
                    Fahrenheit
                  </button>
                  <button
                    onClick={this.makeCelsius}
                    type="button"
                    className={"btn btn-right " + btnRight}
                  >
                    Celsius
                  </button>
                  <p>
                    <strong>Temperature: </strong>
                    {weather.current.temp_c}°C
                    <br />
                    <strong>Humidity: </strong>
                    {weather.current.humidity}%<br />
                    <strong>Feels like: </strong>
                    {weather.current.feelslike_c}°C
                    <br />
                    <strong>Wind speed: </strong>
                    {weather.current.wind_kph} kph
                    <br />
                    <strong>Wind gust speed: </strong>
                    {weather.current.gust_kph} kph
                    <br />
                    <strong>Wind direction: </strong>
                    {weather.current.wind_dir}
                    <br />
                    <strong>Cloud cover: </strong>
                    {weather.current.cloud}%<br />
                    <strong>Precipitation: </strong>
                    {weather.current.precip_mm} mm
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <p>Please enter a valid US zipcode.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              US Zipcode:
              <input
                className="input-field"
                type="number"
                required
                minLength="5"
                maxLength="5"
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

export default Home;
