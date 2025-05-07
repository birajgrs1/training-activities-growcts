import React, { useEffect, useState } from "react";
import { WiDaySunny, WiCloudy, WiRain, WiHumidity, WiSunset } from "react-icons/wi";

const Card = ({
  temp,
  humidity,
  pressure,
  weatherMood,
  name,
  speed,
  country,
  sunset,
  unit,
}) => {
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [timeStr, setTimeStr] = useState("");

  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const convertTemperature = (temp, unit) => {
    if (unit === "matric") {
      return celsiusToFahrenheit(temp); 
    }
    return temp; 
  };

  const displayTemp = convertTemperature(temp, unit);

  useEffect(() => {
    switch (weatherMood) {
      case "Clear":
        setWeatherIcon(<WiDaySunny size={100} />);
        break;
      case "Clouds":
        setWeatherIcon(<WiCloudy size={100} />);
        break;
      case "Rain":
        setWeatherIcon(<WiRain size={100} />);
        break;
      default:
        setWeatherIcon(<WiDaySunny size={100} />);
        break;
    }

    const date = new Date(sunset * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    setTimeStr(`${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`);
  }, [weatherMood, sunset]);

  return (
    <article className="w-[40%] mt-10 bg-[#ccf] shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white flex justify-center items-center py-12">
        <div className="text-8xl">{weatherIcon}</div>
      </div>

      <div className="px-12 py-8 text-center bg-gray-800 text-white">
        <div className="text-7xl mb-4">
          {Math.round(displayTemp)}°{unit === "metric" ? "C" : "F"}
        </div>
        <div className="text-3xl mb-4 uppercase">{weatherMood}</div>
        <div className="text-2xl mb-4">
          {name}, {country}
        </div>

        <div className="mt-8 text-xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-teal-500">
                <i className="wi wi-sunset text-3xl"></i>
              </p>
              <p>{timeStr}</p>
              <p className="text-teal-500">Sunset</p>
            </div>
            <div className="text-center">
              <p className="text-teal-500">
                <i className="wi wi-humidity text-3xl"></i>
              </p>
              <p>{humidity}%</p>
              <p className="text-teal-500">Humidity</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <p className="text-teal-500">
                <i className="wi wi-rain text-3xl"></i>
              </p>
              <p>{pressure} hPa</p>
              <p className="text-teal-500">Pressure</p>
            </div>
            <div className="text-center">
              <p className="text-teal-500">
                <i className="wi wi-strong-wind text-3xl"></i>
              </p>
              <p>{speed} m/s</p>
              <p className="text-teal-500">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;



/*
The Celsius to Fahrenheit formula says °F = (9/5) °C+32.
 The Fahrenheit to Celsius formula says °C = (°F - 32) × 5/9.
*/