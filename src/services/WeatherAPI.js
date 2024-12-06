import axios from "axios";
import { OPEN_WEATHER_MAP_KEY } from "../config";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const getForCountry = ({ lat, lng }) => {
  const request = axios.get(
    `${baseUrl}lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_MAP_KEY}&units=metric`
  );
  return request.then((response) => response.data);
};

export default { getForCountry };
