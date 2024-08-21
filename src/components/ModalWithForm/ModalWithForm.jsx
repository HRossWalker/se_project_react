import "./ModalWithForm.css";
import close from "../../assets/close.png";
import { useRef } from "react";

function ModalWithForm({
  children,
  onSubmit,
  buttonText,
  title,
  name,
  onClose,
  isOpen,
}) {
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
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close">
          <img
            src={close}
            alt="Showing X for close"
            className="modal__close-btn"
          ></img>
        </button>
        <form action="" onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
