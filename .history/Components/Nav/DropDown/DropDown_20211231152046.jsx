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
            <img className={styles.icon} src={react} />
            React
          </li>
        </Link>

        <Link href="/WebDev/Node">
          <li className={styles.menuItem}>
            <img className={styles.icon} src={node} />
            Node
          </li>
        </Link>

        <Link href="/WebDev/JavaScript">
          <li className={styles.menuItem}>
            <img className={styles.icon} src={js} />
            JavaScript
          </li>
        </Link>

        <Link href="/WebDev/WebAssembly">
          <li className={styles.menuItem}>
            <img className={styles.icon} src={wa} />
            WA
          </li>
        </Link>
        <Link href="/WebDev">
          <li className={styles.menuItem}>Show All</li>
        </Link>
      </ul>
    </div>
  );
});

export default DropDown;
