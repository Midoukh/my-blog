import React from "react";
import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";
const reactIcon = require("../../public/Assets/physics.png");
const JSIcon = require("../../public/Assets/JavaScript-logo.png");
const nodeIcon = require("../../public/Assets/node-js-icon.png");
const cryptoIcon = require("../../public/Assets/bitcoin.png");
const booksIcon = require("../../public/Assets/read.png");
const waIcon = require("../../public/Assets/WA.png");

const BurgerMenu = ({}) => {
  return (
    <Menu right pageWrapId={"page-wrap"} pageWrapId={"page-wrap"}>
      <Link href="/WebDev/React">
        <li id="home" className="menu-item">
          <img src={reactIcon} alt="react" />
          <h3>React</h3>
        </li>
      </Link>
      <Link href="/WebDev/JavaScript">
        <li id="home" className="menu-item">
          <img src={JSIcon} alt="javascript" />
          <h3>JavaScript</h3>
        </li>
      </Link>
      <Link href="/WebDev/Node">
        <li id="home" className="menu-item">
          <img src={nodeIcon} alt="node js" />
          <h3>Node</h3>
        </li>
      </Link>
      <Link href="/WebDev/WebAssembly">
        <li id="home" className="menu-item">
          <img src={waIcon} alt="web assembly" />
          <h3>WebAssembly</h3>
        </li>
      </Link>
      <Link href="/Crypto">
        <li id="home" className="menu-item">
          <img src={cryptoIcon} alt="crypto" />
          <h3>Crypto</h3>
        </li>
      </Link>
      <Link href="/BooksAndResources">
        <li id="home" className="menu-item">
          <img src={booksIcon} alt="books" />
          <h3>Books And Resources</h3>
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
