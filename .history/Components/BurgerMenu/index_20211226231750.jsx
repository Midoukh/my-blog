import React from "react";
import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";

const BurgerMenu = ({}) => {
  return (
    <Menu right pageWrapId={"page-wrap"} pageWrapId={"page-wrap"}>
      <Link>
        <li id="home" className="menu-item">
          React
        </li>
      </Link>

      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default BurgerMenu;
