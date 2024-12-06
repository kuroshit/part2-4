import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const searchCountry = (query) => {
  axios
    .get(`${baseUrl}/name/${query}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default { getAllCountries, searchCountry };
