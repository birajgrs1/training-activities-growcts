import React, { useState, useEffect } from 'react';
import Card from './Card';

const Temp = () => {
  const [searchValue, setSearchValue] = useState('Kathmandu');
  const [tempInfo, setTempInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');

  const getWeatherInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${unit}&appid=d5f0febe2774e54047366d0bd65429a5
`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      setTempInfo({
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(() => {
    getWeatherInfo();
  }, [unit, searchValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mt-10">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          id="search"
          className="px-6 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="bg-teal-500 ml-[4px] text-white px-7 py-3 rounded-r-lg"
          onClick={getWeatherInfo}
        >
          Search
        </button>
      </div>

      {loading && <span className="loader m-[80px]">Loading...</span>}
      {error && <div className="text-red-500">{error}</div>}
      {tempInfo && !loading && !error && <Card {...tempInfo} unit={unit} />}
      
      <button
        className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg"
        onClick={handleUnitToggle}
      >
        Toggle to {unit === 'metric' ? '°F' : '°C'}
      </button>
    </div>
  );
};

export default Temp;
