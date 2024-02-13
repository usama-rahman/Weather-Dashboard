import TempMaxLogo from "../../assets/icons/temp-max.svg";
import TempMinLogo from "../../assets/icons/temp-min.svg";
import HumadityLogo from "../../assets/icons/humidity.svg";
import CloudyIcon from "../../assets/icons/cloud.svg";
import WindIcon from "../../assets/icons/wind.svg";

import { useContext } from "react";
import { WeatherContext } from "../../context";

function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);

  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate,
  } = weatherData;

  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        Today <span> {climate} </span>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={TempMaxLogo} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>{Math.round(minTemperature)}</span>
          <div className="inline-flex space-x-4">
            <p>19°</p>
            <img src={TempMinLogo} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={HumadityLogo} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={CloudyIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={WindIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
export default WeatherCondition;
