import React from "react";
import { bubble as Menu } from "react-burger-menu";

const BurgerMenu = ({}) => {
  const showSettings = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Menu right pageWrapId={"page-wrap"}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
      <main id="page-wrap">. . .</main>
    </>
  );
};

export default BurgerMenu;
