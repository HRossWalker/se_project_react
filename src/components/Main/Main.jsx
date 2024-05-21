import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";
import { defaultClothingItems } from "../../utils/constants.js";

function Main({ weatherData, handleCardClick }) {
  return (
    <main className="main">
      <WeatherCard weatherDataForCard={weatherData} />
      <section className="cards"></section>
      <p className="cards__text">
        Today is {Math.round(weatherData.temp.F)} &deg; F / You may want to
        wear:
      </p>
      <ul className="cards__list">
        {defaultClothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default Main;
