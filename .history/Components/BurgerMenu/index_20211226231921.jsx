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
      <Link>
        <li id="home" className="menu-item">
          JavaScript
        </li>
      </Link>
      <Link>
        <li id="home" className="menu-item">
          Node
        </li>
      </Link>
      <Link>
        <li id="home" className="menu-item">
          WebAssembly
        </li>
      </Link>
      <Link>
        <li id="home" className="menu-item">
          Crypto
        </li>
      </Link>
      <Link>
        <li id="home" className="menu-item">
          Books And Resources
        </li>
      </Link>
      <Link>
        <li id="home" className="menu-item">
          Show All
        </li>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
