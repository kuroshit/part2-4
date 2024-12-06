import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm.jsx";
import SearchResult from "./components/SearchResult.jsx";
import Countries from "./services/Countries.js";

const App = () => {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const data = Countries.getAllCountries();
    data.then((response) => {
      setCountries(response);
    });
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCountries(filteredCountries);
  };

  return (
    <>
      <div>
        <SearchForm handleInput={handleInput} />
      </div>
      <div>
        <SearchResult data={filteredCountries} />
      </div>
    </>
  );
};

export default App;
