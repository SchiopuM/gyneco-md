import React from "react";
import { Auth } from "../Auth";
import Logo from "../../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = () => {
  const { navbar, links, link } = style;
  return (
    <div className={navbar}>
      <NavLink to="/">
        <img alt="img" src={Logo} width="158" height="46" />
      </NavLink>
      <div className={links}>
        <NavLink className={link} to="#">
          Educație
        </NavLink>
        <NavLink className={link} to="#">
          Consultații
        </NavLink>
        <NavLink className={link} to="#">
          Blog
        </NavLink>
        <NavLink className={link} to="#">
          Despre noi
        </NavLink>
      </div>
      <Auth />
    </div>
  );
};

export default NavBar;
