import "./ItemCard.css";

function ItemCard({ key, item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item">
      <h2 className="item__name">{item.name}</h2>
      <img
        onCardClick={handleCardClick}
        className="item__image"
        id={key}
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
