import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Stockholm</h1>
      <ul>
        <li>Monday 15:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
              className="float-left"
            />
            <strong className="temperature"> 26</strong>
            <span className="units"> ºC </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:70%</li>
            <li>Humidity:45%</li>
            <li>Wind: 7 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
