import React, { Component } from "react";
import "../styles/index.scss";

class InputForm extends Component {
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
    console.log(e.target.value); // logging correctly
    this.setState({ zipCode: e.target.value });
    console.log(this.state.zipCode);
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

  render() {
    const {
      error,
      isLoaded,
      weather,
      btnLeft,
      btnRight,
      tempScale
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="zipcode-form">
        <h2>
          Enter a 5-digit US zipcode here to get current weather conditions.
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
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;
