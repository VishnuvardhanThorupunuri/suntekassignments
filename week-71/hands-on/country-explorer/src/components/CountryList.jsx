import CountryCard from "./CountryCard";

function CountryList({ countries }) {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}
    >

      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}

    </div>
  );

}

export default CountryList;