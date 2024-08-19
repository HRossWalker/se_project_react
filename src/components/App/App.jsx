import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
// import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, apiKey } from "../../utils/constants.js";
import api from "../../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({});

  const [temp, setTemp] = useState("999");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  useEffect(() => {
    api
      .getItems()
      .then((items) => {
        console.log(items);
        setClothingItems(items);
        console.log(clothingItems);
      })
      .catch(console.error);
  }, []);

  // console.log(`******${clothingItems}`);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardDelte = (card) => {
    api
      .removeItem(card.id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      getWeather(coordinates, apiKey)
        .then((data) => {
          setWeatherData(filterWeatherData(data));
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                weatherData.temperature && (
                  <Main
                    weatherData={weatherData}
                    items={clothingItems}
                    onCardClick={handleCardClick}
                  />
                )
              }
            />
            <Route
              exact
              path="/profile"
              element={
                clothingItems.length !== 0 && (
                  <Profile
                    weatherClothesData={weatherData}
                    clothes={clothingItems}
                    onCardClick={handleCardClick}
                    onCardDelete={handleCardDelte}
                    onAddNewClick={() => setActiveModal("create")}
                  />
                )
              }
            />
          </Routes>
          <Footer />
        </div>

        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal card={selectedCard} onClose={handleCloseModal} />
        )}

        {/* **** need to rework */}

        <ModalWithForm
          name="form"
          title="New garment"
          buttonText="Add garment"
          onClose={handleCloseModal}
          isOpen={activeModal === "add-garment"}
        >
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="modal__input"
            />{" "}
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              id="imageUrl"
              placeholder="Image Url"
              className="modal__input"
            />{" "}
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the Weather Type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="hot"
                name="radiobutton"
                type="radio"
                className="modal__radio-input"
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="warm"
                name="radiobutton"
                type="radio"
                className="modal__radio-input"
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="cold"
                name="radiobutton"
                type="radio"
                className="modal__radio-input"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          name="image"
          card={selectedCard}
          onClose={handleCloseModal}
          isOpen={activeModal === "preview"}
        ></ItemModal>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

// useEffect(() => {
//   if (location.latitude && location.longitude) {
//     getForecastWeather(location, apiKey).then((data) => {
//       setWeatherData(filterDataFromWeatherAPI(data));
//     })
//     .catch((err) => console.log(err));
//   }
// }, []); done

// const [weatherData, setWeatherData] = useState({
//   type: "",
//   temp: { F: 999, C: 999 },
//   city: "",
//   // condition: "",
// });
