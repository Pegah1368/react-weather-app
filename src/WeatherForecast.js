import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

  let[loaded, setLoaded]=useState(false);
  let[forecast, setForecast]=useState(null);
  
  function handleresponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
if (loaded) {
  console.log(forecast)
return ( <div className="WeatherForecast">
      <div className="row">
        <div className="col">
        <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    </div>
);
}
 else {
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "5057d48b02a6aea197a7f37d83ba709c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleresponse);

  return null;
}
}