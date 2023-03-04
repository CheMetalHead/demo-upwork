import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Logout from "../Logout/Logout";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navButtons = [
    "Home",
    "Dashboard",
    "Projects",
    "Tasks",
    "Reporting",
    "Users",
  ];
  const navLinks = [{title: "Home", link: '/'},
  {title: "Dashboard", link: 'https://www.google.com'},
  {title: "Projects", link: '/https://www.google.com'},
  {title: "Tasks", link: '/https://www.google.com'},
  {title: "Reporting", link: '/https://www.google.com'},
  {title: "Users", link: '/https://www.google.com'}]

  const handleShowLogout = () => {
    setShowLogout((prevState) => !prevState);
  };
  return (
    <div className="navbar">
      <div className="navigation-section">
        <Link to={"/"} className="logo-section">
          <span className="logo-text">Untitled UI</span>
        </Link>
        {navLinks.map((button) => (
          <Link to={button.link} className="nav-button" key={`nav-button-${button.title}`}>
            {button.title}
          </Link>
        ))}
      </div>
      <div className="user-section">
        <div className="upgrade-button">
          <BoltOutlinedIcon />
          Upgrade Now
        </div>
        <Link to={"/Settings"} className="settings-button">
          <SettingsOutlinedIcon />
        </Link>
        <div className="notifications-icon">
          <NotificationsNoneOutlinedIcon />
        </div>
        <img
          onClick={handleShowLogout}
          src=" https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="user-image"
        />
        {showLogout && <Logout />}
      </div>
    </div>
  );
};

export default Navbar;
