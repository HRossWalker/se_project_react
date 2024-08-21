import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import "./AddItemModal.css";

const AddItemModal = ({ onClose, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    onClose();
  };

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalWithForm
      name="form"
      title="New garment"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          className="modal__input"
          onChange={handleNameChange}
        />{" "}
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          placeholder="Image Url"
          className="modal__input"
          onChange={handleUrlChange}
        />{" "}
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the Weather Type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="radiobutton"
            type="radio"
            className="modal__radio-input"
            value="hot"
            onChange={handleWeatherChange}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="radiobutton"
            type="radio"
            value="warm"
            className="modal__radio-input"
            onChange={handleWeatherChange}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="radiobutton"
            type="radio"
            value="cold"
            className="modal__radio-input"
            onChange={handleWeatherChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

// {
//   <div className={`modal ${isOpen && "modal_opened"}`} onClick={handleOverlay}>
//     <label htmlFor="name" className="modal__label">
//       Name{" "}
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         minLength="1"
//         maxLength="30"
//         value={name}
//         onChange={handleNameChange}
//         className="modal__input"
//       />{" "}
//     </label>
//     <label htmlFor="imageUrl" className="modal__label">
//       Image{" "}
//       <input
//         type="url"
//         name="imageUrl"
//         id="imageUrl"
//         placeholder="Image Url"
//         className="modal__input"
//         minLength="1"
//         maxLength="30"
//         value={imageUrl}
//         onChange={handleUrlChange}
//       />{" "}
//     </label>
//     <fieldset className="modal__radio-buttons">
//       <p>Select the weather type:</p>
//       <label htmlFor="hot" className="modal__label modal__label_type_radio">
//         <input
//           type="radio"
//           name="radiobtn"
//           id="hot"
//           value="hot"
//           onChange={handleWeatherChange}
//         />
//         Hot
//       </label>
//       <label htmlFor="warm" className="modal__label modal__label_type_radio">
//         <input
//           type="radio"
//           name="radiobtn"
//           id="warm"
//           value="warm"
//           onChange={handleWeatherChange}
//         />
//         Warm
//       </label>
//       <label htmlFor="cold" className="modal__label modal__label_type_radio">
//         <input
//           type="radio"
//           name="radiobtn"
//           id="cold"
//           value="cold"
//           onChange={handleWeatherChange}
//         />
//         Cold
//       </label>
//     </fieldset>
//   </div>;
// }
