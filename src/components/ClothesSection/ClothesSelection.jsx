import "./ClothesSelection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSelection({ weatherData, clothingItems, onClick, onAddClick }) {
  <div className="clothes-section">
    <div>
      <p>Your items</p>
      <button onClick={onAddClick}>+ Add new</button>
    </div>
    <ul className="clothes-section__items">
      {clothingItems.map((item) => {
        return <ItemCard key={item._id} item={item} onCardClick={onClick} />;
      })}
    </ul>
  </div>;
}

export default ClothesSelection;
