import React, { Component } from "react";
// import { Navbar } from "./components/navbar";
import "../styles/index.scss";

class About extends Component {
  render() {
    return (
      <div>
        <div className="background-container">
          <div className="content-container">
            <div className="about-box">
              <h2>About this App</h2>
              <p>
                I created this simple app to practice working with RESTful APIs
                in React. It sends an HTTPS request to{" "}
                <a href="https://www.weatherapi.com/">WeatherAPI.com</a>, taking
                the user's input as the query parameter, and returns some
                relevant weather data for that location. It also utilizes React
                Router, and is deployed on Heroku via the Heroku CLI.
                <br />
                <br />
                <strong>Why another weather app? 🤔</strong>
                <br /> <br />
                As an avid scuba diver in South Florida, I often check the
                weather and wind before heading out to a dive site. Because
                South Florida weather can be fickle to say the least, I take
                weather <i>forecasts</i> with a healthy dose of skepticism, and
                usually want to know what the weather is actually doing, just
                before heading out.
                <br />
                <br />
                Thus, What's the Weather was born. Plus, I was looking for an
                excuse to practice a few of the above things.
                <br />
                <br />
                Yes, I know I could just Google it, but where's the fun in that?
                😜
                <br />
                <br />
                <strong>Future Features:</strong>
                <br />
                <br />- Expand form data validation to include city names
                <br />- Incorporate data on wave height and water temperature
                from another API (as soon as I find a free one)
                <br />
                <br />
                <strong>Say hello!</strong>
                <br />
                <br />
                Find me on{" "}
                <a href="https://twitter.com/rebeccaawillett">Twitter</a>,{" "}
                <a href="https://www.linkedin.com/in/willettrebecca/">
                  LinkedIn
                </a>
                , or my <a href="https://rebwill.github.io/">portfolio</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
