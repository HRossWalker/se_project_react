import { useMemo } from "react";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";
// import { defaultClothingItems } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherData, items, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherData?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp > 66 && weatherData < 86) {
      return "warm";
    } else if (temp >= 66) {
      return "cold";
    }
  }, [weatherData]);

  const filteredCards = items.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard weatherDataForCard={temp} />
      <section className="cards">
        <p className="cards__text">
          Today is {Math.round(temp)} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {filteredCards.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

// const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
// if (!weatherData) return null;

// return (

//   <main classname='main'>
//     <WeatherCard weatherData={weatherData} />
//     <section className='main__clothes'>
//       <div className='main__info'>
//         <div className='main__description-container'>
//           <p className='main__description'>Today is {weatherData.temperature[currentTemperatureUnit]} and it is {weatherData.type}</p>
//           <p className='main__description_slash'> / </p>
//           <p className='main__description'>You may want to wear;</p>
//         </div>

//       </div>
//       <ul className='main__items'>
//         {cards.filter(card => card.weather === weatherData.type).map(filteredCard => (
//           <ItemCard key={filteredCard.id} card={filteredCard} onCardClick={onCardClick} onCardDelete={onCardDelete} />

//         ))}
//       </ul>
//     </section>
//   </main>
// )

// Old code... maybe
// return (
//   <main className="main">
//   <WeatherCard weatherDataForCard={weatherData} />
//   <section className="cards"></section>
//   <p className="cards__text">
//     Today is {Math.round(weatherData.temp.F)} &deg; F / You may want to
//     wear:
//   </p>
//   <ul className="cards__list">
//     {defaultClothingItems
//       .filter((item) => {
//         return item.weather === weatherData.type;
//       })
//       .map((item) => {
//         return (
//           <ItemCard
//             key={item._id}
//             item={item}
//             onCardClick={handleCardClick}
//           />
//         );
//       })}
//   </ul>
// </main>
// );
