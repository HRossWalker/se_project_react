import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

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
      <ClothesSection
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
