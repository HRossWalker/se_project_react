import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="site logo WTWR" className="header__logo" />
      <p className="header__date-and-location">DATA, LOCATION</p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="" className="header__user-avatar"></img>
      </div>
    </header>
  );
}

export default Header;
