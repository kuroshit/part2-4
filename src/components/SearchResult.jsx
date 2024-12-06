import { useState } from "react";
import Country from "./Country";

const SearchResult = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowClick = (country) => {
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  if (!data || data.length === 0) {
    return (
      <>
        <h2>Search Results</h2>
        <p>No results found. Please search for a country.</p>
      </>
    );
  }

  if (data.length > 10) {
    return (
      <>
        <h2>Search Results</h2>
        <p>Too many matches, specify another filter.</p>
      </>
    );
  }

  if (data.length === 1) {
    return <Country country={data[0]} />;
  }

  return (
    <>
      <h2>Search Results</h2>
      <ul>
        {data.map((country, i) => (
          <li key={i}>
            {country.name.common}
            <button onClick={() => handleShowClick(country)}>
              {selectedCountry === country ? "Hide" : "Show"}
            </button>
            {selectedCountry === country && (
              <div>
                <h3>{country.name.common}</h3>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  width="100"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchResult;
