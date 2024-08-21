import "./SideBar.css";
import defaultAvatar from "../../assets/avatar.png";

function SideBar({ username, currentAvatar }) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentAvatar || defaultAvatar}
        alt="Default Avatar"
      />
      <p className="sidebar__username">{username}</p>
    </div>
  );
}

export default SideBar;
