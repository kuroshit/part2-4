import { useEffect, useState } from "react";
import WeatherAPI from "../services/WeatherAPI";

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    WeatherAPI.getForCountry({ lat: location[0], lng: location[1] }).then(
      (response) => {
        setWeather(response);
      }
    );
  }, [location]);

  return (
    <>
      <p>Temperature: {weather ? weather.main.temp : "loading..."} °C</p>
      {weather && (
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
      )}
      <p>Wind: {weather ? weather.wind.speed : "loading..."} m/s</p>
    </>
  )
};

export default Weather;
