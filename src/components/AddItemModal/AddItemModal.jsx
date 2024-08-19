import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
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
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Image
        <input
          type="url"
          name="imageUrl"
          minLength="1"
          maxLength="30"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input
            type="radio"
            name="radiobtn"
            id="hot"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label> Hot</label>
        </div>
        <div>
          <input
            type="radio"
            name="radiobtn"
            id="warm"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label> Warm</label>
        </div>
        <div>
          <input
            type="radio"
            name="radiobtn"
            id="cold"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label> Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
