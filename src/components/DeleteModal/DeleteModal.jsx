import "./DeleteModal.css";
import close from "../../assets/whiteclose.png";

function DeleteModal({
  card,
  onClose,
  handleCardDelete,
  isOpen,
  isLoading,
  handleIsLoadingToggle,
}) {
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal">
      <div
        className={`delete__modal ${isOpen && "delete__modal_opened"}`}
        onClick={handleOverlay}
      >
        <button onClick={onClose} className="modal__close">
          <img
            src={close}
            alt="X button to close image"
            className="modal__close-btn"
          />
        </button>
        <h2 className="delete__modal-paragraph">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </h2>
        <button
          className="delete__button"
          // onClick={() => handleCardDelete(card)}
          onClick={() => {
            handleIsLoadingToggle;
            handleCardDelete(card);
          }}
        >
          {isLoading ? "Deleting..." : "Yes, delete item"}
        </button>
        <button className="delete__button-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
