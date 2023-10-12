const API_KEY = 'ecefd00619614e7e97004223231304';
const FETCH_CITY_WEATHER_URL = 'http://api.weatherapi.com/v1/current.json';

export const fetchWeatherByCity = async (city) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);
  url.searchParams.append('key', API_KEY);
  url.searchParams.append('q', city);
  url.searchParams.append('aqi', 'false');
  const response = await fetch(url);
  const data = await response.json();
  return data
};
