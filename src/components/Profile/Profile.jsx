import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSelection from "../ClothesSection/ClothesSelection";

const Profile = ({
  weatherClothesData,
  clothes,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar />
    </section>
    <section className="profile-clothes">
      <ClothesSelection
        weatherClothes={weatherClothesData}
        clothingItems={clothes}
        onAddClick={onAddNewClick}
        onClick={onCardClick}
        onDelete={onCardDelete}
      />
    </section>
  </div>
);

export default Profile;
