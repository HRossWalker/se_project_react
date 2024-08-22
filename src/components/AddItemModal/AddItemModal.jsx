import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import "./AddItemModal.css";

const AddItemModal = ({
  onClose,
  onAddItem,
  isOpen,
  isLoading,
  handleIsLoadingToggle,
}) => {
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
    handleIsLoadingToggle();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      name="form"
      title="New garment"
      buttonText={isLoading ? "Saving..." : "Add garment"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleIsLoadingToggle={handleIsLoadingToggle}
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
