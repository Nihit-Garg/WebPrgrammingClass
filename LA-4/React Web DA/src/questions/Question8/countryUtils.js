export const fetchCountries = async (query) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);
    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error('Failed to fetch from REST Countries API');
    }
    const data = await response.json();
    
    return data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "N/A",
      population: country.population.toLocaleString(),
      region: country.region,
      flag: country.flags.svg || country.flags.png
    }));
  } catch (error) {
    throw error;
  }
};
