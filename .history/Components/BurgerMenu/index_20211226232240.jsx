import React from "react";
import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";

const BurgerMenu = ({}) => {
  return (
    <Menu right pageWrapId={"page-wrap"} pageWrapId={"page-wrap"}>
      <Link href="/WebDev/React">
        <li id="home" className="menu-item">
          React
        </li>
      </Link>
      <Link href="/WebDev/JavaScript">
        <li id="home" className="menu-item">
          JavaScript
        </li>
      </Link>
      <Link href="/WebDev/Node">
        <li id="home" className="menu-item">
          Node
        </li>
      </Link>
      <Link href="/WebDev/WebAssembly">
        <li id="home" className="menu-item">
          WebAssembly
        </li>
      </Link>
      <Link href="/Crypto">
        <li id="home" className="menu-item">
          Crypto
        </li>
      </Link>
      <Link href="/BooksAndResources">
        <li id="home" className="menu-item">
          Books And Resources
        </li>
      </Link>
      <Link href="Posts/WebDev">
        <li id="home" className="menu-item">
          Show All
        </li>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
