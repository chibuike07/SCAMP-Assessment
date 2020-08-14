import React from "react";
import CustomNavLinks from "../component_navlinks/NavLink";
import Styles from "./Header.module.css";
const Header = () => {
  const { header, fig, nav } = Styles;
  return (
    <header className={header}>
      <figure className={fig}></figure>
      <nav className={nav}>
        <CustomNavLinks text={"home"} url={"/"} />
        <CustomNavLinks text={"country"} url={"/"} />
        <CustomNavLinks text={"statistic"} url={"/"} />
      </nav>
    </header>
  );
};

export default Header;
