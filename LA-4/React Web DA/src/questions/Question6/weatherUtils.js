// weatherUtils.js
export const fetchWeather = async (city) => {
  try {
    // 1. Get coordinates using Open-Meteo Geocoding
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();
    
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error('City not found');
    }
    
    const { latitude, longitude, name, country } = geoData.results[0];
    
    // 2. Get current weather
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
    const weatherData = await weatherRes.json();
    
    const current = weatherData.current;
    
    // Map WMO weather code to text description
    const weatherCode = current.weather_code;
    let description = "Clear";
    if (weatherCode >= 1 && weatherCode <= 3) description = "Partly Cloudy";
    if (weatherCode >= 45 && weatherCode <= 48) description = "Foggy";
    if (weatherCode >= 51 && weatherCode <= 67) description = "Rainy";
    if (weatherCode >= 71 && weatherCode <= 77) description = "Snowy";
    if (weatherCode >= 95) description = "Thunderstorm";

    return {
      cityName: `${name}, ${country}`,
      temperature: current.temperature_2m,
      description: description,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m
    };
  } catch (error) {
    throw error;
  }
};
