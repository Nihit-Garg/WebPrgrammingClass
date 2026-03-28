import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`Flag of ${country.name}`} className="country-flag" />
      <div className="country-info">
        <h3>{country.name}</h3>
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong> {country.region}</p>
      </div>
    </div>
  );
};

export default CountryCard;
