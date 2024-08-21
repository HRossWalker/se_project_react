import "./ClothesSelection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSelection({ weatherData, clothingItems, onClick, onAddClick }) {
  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <p className="clothes__section-title">Your items</p>
        <button className="clothes__section-btn" onClick={onAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes__section-items">
        {clothingItems.map((item) => {
          return <ItemCard key={item._id} item={item} onCardClick={onClick} />;
        })}
      </ul>
    </div>
  );
}

export default ClothesSelection;
