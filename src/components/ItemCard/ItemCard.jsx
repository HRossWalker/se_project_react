import "./ItemCard.css";
// import DeleteModal from "../DeleteModal/DeleteModal";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item">
      <h2 className="item__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="item__image"
        id={item._id}
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
