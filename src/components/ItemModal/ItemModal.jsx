import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import close from "../../assets/whiteclose.png";
import { useRef } from "react";

function ItemModal({ onClose, isOpen, name, card }) {
  const ref = useRef();

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div className={`modal__content modal__content_type_${name}`} ref={ref}>
        <button onClick={onClose} className="modal__close">
          <img
            src={close}
            alt="X button to close image"
            className="modal__close-btn"
          />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
