import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  
  const getWeatherByCity = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  
  const getLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          setLoading(true);
          setError("");

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );

          const data = await response.json();

          setWeather(data);
        } catch (err) {
          setError("Location weather failed");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
      }
    );
  };

  return (
    <div className="app">
      <div className="weather-card">
        <h1>Weather App</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Buttons */}
        <div className="buttons">
          <button onClick={getWeatherByCity}>
            Search
          </button>

          <button onClick={getLocationWeather}>
            Use My Location
          </button>
        </div>

        {/* Loading */}
        {loading && <p>Loading...</p>}

        {/* Error */}
        {error && <p>{error}</p>}

        {/* Weather Data */}
        {weather && (
          <div className="weather-info">
            <h2>{weather.name}</h2>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].description}</p>

            <p>Humidity: {weather.main.humidity}%</p>

            <p>Wind: {weather.wind.speed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;