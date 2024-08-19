import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import defaultAvatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ onCreateModal, weatherData }) => {
  const currentDate = "1";
  const username = "Bobbert";
  const currentAvatar = "";

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="site logo WTWR" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <ToggleSwitch />
      <div className="header__nav">
        <button onClick={onCreateModal} className="header__add-clothes-btn">
          + Add Clothes
        </button>
        <Link to="/profile" className="header__link">
          <div className="header__profile">
            <div className="header__username">{username}</div>
            {currentAvatar ? (
              <img
                src={currentAvatar || defaultAvatar}
                alt="user avatar"
                className="header__user-avatar"
              />
            ) : (
              <span className="header__avatar header__avatar_none">
                {username?.toUpperCase().charAt(0) || ""}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

// Not the video
// function Header({ handleAddClick, weatherData }) {
//   const currentDate = new Date().toLocaleString("default", {
//     month: "long",
//     day: "numeric",
//   });
// const username = "Elise Bouer";
// const avatar = "";

//   return (
//     <header className="header">
//       <img src={logo} alt="site logo WTWR" className="header__logo" />
//       <p className="header__date-and-location">
//         {currentDate}, {weatherData.city}
//       </p>
//       <button onClick={handleAddClick} className="header__add-clothes-btn">
//         + Add Clothes
//       </button>
//       <div className="header__user-container">
//         <p className="header__username">Terrence Tegegne</p>
//         <img
//           src={avatar}
//           alt="Picture of Terrence Tegegne"
//           className="header__user-avatar"
//         ></img>
//       </div>
//     </header>
//   );
// }

// before final video
// return (
//   <header className="header">
//     <div>
//       <Link to="/">
//         <img src={require("../images/logo.svg").default} alt="logo" />
//       </Link>
//     </div>
//     <div className="header__avatar-logo">
//       <ToggleSwitch />
//       <div>
//         <button type="text" onClick={onCreateModal}>
//           {" "}
//           Add New CLothes
//         </button>
//       </div>
//       <div>Name</div>
//       <div>
//         <img src={require("../images/avatar.svg").default} />
//       </div>
//     </div>
//   </header>
// );
