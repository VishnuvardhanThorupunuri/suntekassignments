function CountryCard({ country }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 text-center w-56 bg-white shadow-md hover:scale-105 transition-transform duration-200">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-28 mx-auto mb-3"
      />

      <h3 className="text-lg font-semibold mb-2">
        {country.name.common}
      </h3>

      <p className="text-sm">
        <span className="font-bold">Capital:</span>{" "}
        {country.capital ? country.capital[0] : "N/A"}
      </p>

      <p className="text-sm">
        <span className="font-bold">Population:</span>{" "}
        {country.population.toLocaleString()}
      </p>

      <p className="text-sm">
        <span className="font-bold">Region:</span>{" "}
        {country.region}
      </p>

    </div>
  );
}

export default CountryCard;