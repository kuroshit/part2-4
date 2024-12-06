import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} width="100" />
      <h3>Weather in {country.name.common}</h3>
      <Weather location={country.capitalInfo.latlng} />
    </>
  );
};

export default Country;
