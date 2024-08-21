import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import { useContext } from "react";

function WeatherCard({ weatherDataForCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherDataForCard.isDay &&
      option.condition === weatherDataForCard.condition
    );
  });
  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherDataForCard.isDay ? 0 : 1];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {Math.round(weatherDataForCard?.temp?.[currentTemperatureUnit])} &deg;
        {currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Top border showing ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;

// const weatherOptions = [
//   { url: require("../images/day/sunny.svg").default, day: true, },
//   { url: require("../images/day/cloud.svg").default, day: true, },
//   { url: require("../images/day/cloudy.svg").default, day: true, },
//   { url: require("../images/day/moon.svg").default, day: false, }
// ];

// const WeatherCard = ({ day=true, type="sunny", weatherTemp = 0 }) => {

//   const imageSrc = weatherOptions.filter((i) => {
//     return i.day === day && i.type === type;
//   });
// };
