import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    messege: "",
  }); // Loading State

  const [error, setError] = useState(null); // Error State

  //   Weather Data Featching Function

  const featchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        messege: "Featching Weather Data",
      });

      //  Data Featching

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );

      if (!res.ok) {
        const errorMessege = `Featching Weather Problem ${res.status}`;
        throw new Error(errorMessege);
      }

      const data = await res.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
      console.log(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        messege: "",
      });
    }
  };

  // Data Calling  && GEO Location

  useEffect(() => {
    setLoading({
      loading: true,
      messege: "Finding Location ...",
    });
    navigator.geolocation.getCurrentPosition((position) => {
      featchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
