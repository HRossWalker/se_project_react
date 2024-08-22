import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, apiKey } from "../../utils/constants.js";
import api from "../../utils/api.js";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import currentAvatar from "../../assets/avatar.png";

// loved the feedback and suggestions, I implimented the isLoading and will work on the other suggestions in the next sprint. I'm pretty behind and need to push forward. Thank you!

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [username, setUsername] = useState("Ross Walker");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  const handleDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleIsLoadingToggle = (isLoading) => {
    isLoading === false ? setIsLoading(true) : setIsLoading(false);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("create");
  };

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((res) => {
        setClothingItems([{ ...item, ...res }, ...clothingItems]);
        handleIsLoadingToggle();
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardDelete = (card) => {
    api
      .removeItem(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c._id !== card._id));
        handleIsLoadingToggle();
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
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            username={username}
          />
          <Routes>
            <Route
              path="/"
              element={
                // weatherData.temp &&
                <Main
                  weatherData={weatherData}
                  items={clothingItems}
                  onCardClick={handleCardClick}
                  handleDeleteModal={handleDeleteModal}
                />
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
                    onCardDelete={handleCardDelete}
                    onAddNewClick={() => setActiveModal("create")}
                    currentAvatar={currentAvatar}
                    username={username}
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
            isLoading={isLoading}
            handleIsLoadingToggle={handleIsLoadingToggle}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            card={selectedCard}
            onClose={handleCloseModal}
            openDeleteModal={handleDeleteModal}
            isOpen={activeModal === "preview"}
            isLoading={isLoading}
          />
        )}

        {activeModal === "delete" && (
          <DeleteModal
            card={selectedCard}
            onClose={handleCloseModal}
            handleCardDelete={handleCardDelete}
            isOpen={activeModal === "delete"}
            isLoading={isLoading}
            handleIsLoadingToggle={handleIsLoadingToggle}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

{
  /* <ModalWithForm
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
        </ModalWithForm> */
}

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
