import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  // Fetch countries when page loads
  useEffect(() => {

    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();
        setCountries(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();

  }, []);

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Country Explorer</h1>

      <SearchBar onSearch={setQuery} />

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;