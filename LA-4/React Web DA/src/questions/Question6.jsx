import React, { useState } from 'react';
import Header from './Question6/Header';
import Search from './Question6/Search';
import Dashboard from './Question6/Dashboard';
import { fetchWeather } from './Question6/weatherUtils';
import './Question6/Question6.css';

const Question6 = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app-container">
      <div className="weather-app-card">
        <h3 className="student-info">Nihit Garg - 24BCE0627</h3>
        <Header />
        <Search onSearch={handleSearch} />
        <Dashboard weather={weatherData} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Question6;
