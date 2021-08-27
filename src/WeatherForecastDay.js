import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperatur() {
    let temperatur = Math.round(props.data.temp.max);
    return `${temperatur}º`;
  }

  function minTemperatur() {
    let temperatur = Math.round(props.data.temp.min);
    return `${temperatur}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max ">
          {maxTemperatur()}
        </span>
        <span className="WeatherForecast-temperature-min ">
          {minTemperatur()}
        </span>
      </div>
    </div>
  );
}
