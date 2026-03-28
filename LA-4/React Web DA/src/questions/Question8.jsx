import React, { useState } from 'react';
import Header from './Question8/Header';
import Search from './Question8/Search';
import CountryList from './Question8/CountryList';
import { fetchCountries } from './Question8/countryUtils';
import './Question8/Question8.css';

const Question8 = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchCountries(query);
      setCountries(results);
    } catch (err) {
      setError(err.message || 'Error fetching countries.');
      setCountries(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="country-app-container">
      <h3 className="student-info">Nihit Garg - 24BCE0627</h3>
      <Header />
      <Search onSearch={handleSearch} />
      <CountryList countries={countries} loading={loading} error={error} />
    </div>
  );
};

export default Question8;
