import React from "react";
import styles from "./DropDown.module.css";
import Link from "next/link";
const react = require("../../../public/Assets/physics.png");
const js = require("../../../public/Assets/JavaScript-logo.png");
const node = require("../../../public/Assets/node-js-icon.png");
const wa = require("../../../public/Assets/WA.png");

const DropDown = React.forwardRef((props, ref) => {
  return (
    <div className={styles.DropDown} ref={ref}>
      <ul>
        <Link href="/WebDev/React">
          <li className={styles.menuItem}>
            React
            <img className={styles.icon} src={react} />
          </li>
        </Link>

        <Link href="/WebDev/Node">
          <div className={styles.menuItem}>
            <li>Node</li>
            <img className={styles.icon} src={node} />
          </div>
        </Link>

        <Link href="/WebDev/JavaScript">
          <div className={styles.menuItem}>
            <li>JavaScript</li>
            <img className={styles.icon} src={js} />
          </div>
        </Link>

        <Link href="/WebDev/WebAssembly">
          <div className={styles.menuItem}>
            <li>Web Assemply</li>
            <img className={styles.icon} src={wa} />
          </div>
        </Link>
        <Link href="/WebDev">
          <li>Show All</li>
        </Link>
      </ul>
    </div>
  );
});

export default DropDown;
