import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, loading, error }) => {
  if (loading) return <div className="country-status">Searching for countries...</div>;
  if (error) return <div className="country-status error">{error}</div>;
  if (!countries) return <div className="country-status empty">Enter a country name to explore its details.</div>;
  if (countries.length === 0) return <div className="country-status empty">No countries found matching that name.</div>;
  
  return (
    <div className="country-grid">
      {countries.map((c, index) => <CountryCard key={index} country={c} />)}
    </div>
  );
};

export default CountryList;
