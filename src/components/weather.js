import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      <center>
        <h1>This is from weather.js</h1>
        <p>temp in F: {weather.current.feelslike_f}</p>
      </center>
    </div>
  );
};

export default Weather;
