import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSelection from "../ClothesSection/ClothesSelection";

const Profile = ({
  weatherClothesData,
  clothes,
  onCardClick,
  onCardDelete,
  onAddNewClick,
  currentAvatar,
  username,
}) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar currentAvatar={currentAvatar} username={username} />
    </section>
    <section className="profile__clothes">
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
