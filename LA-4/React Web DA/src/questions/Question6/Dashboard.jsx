import React from 'react';

const Dashboard = ({ weather, loading, error }) => {
  if (loading) return <div className="weather-loading">Loading weather data...</div>;
  if (error) return <div className="weather-error">{error}</div>;
  if (!weather) return <div className="weather-empty">Enter a city to see the weather.</div>;

  return (
    <div className="weather-dashboard">
      <h3>{weather.cityName}</h3>
      <div className="weather-row">
        <strong>Temperature:</strong> {weather.temperature} °C
      </div>
      <div className="weather-row">
        <strong>Conditions:</strong> {weather.description}
      </div>
      <div className="weather-row">
        <strong>Humidity:</strong> {weather.humidity}%
      </div>
      <div className="weather-row">
        <strong>Wind Speed:</strong> {weather.windSpeed} km/h
      </div>
    </div>
  );
};

export default Dashboard;
