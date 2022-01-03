import React from "react";
import styles from "./GlobalStyle/WebDevPosts.module.css";
import Link from "next/link";

const jsLogo = require("../../public/Assets/JavaScript-logo.png");
const reactLogo = require("../../public/Assets/physics.png");
const nodeLogo = require("../../public/Assets/node-js-icon.png");
const waLogo = require("../../public/Assets/WA.png");

class WebDev extends React.Component {
  render() {
    return (
      <main className={styles.WebDevGrid}>
        <Link href="/WebDev/JavaScript">
          <section className={styles.JS}>
            <img src={jsLogo} />
            <h1>Java Script Posts.</h1>
          </section>
        </Link>

        <Link href="/WebDev/React">
          <section className={styles.React}>
            <img src={reactLogo} />
            <h1>React Posts.</h1>
          </section>
        </Link>

        <Link href="/WebDev/Node">
          <section className={styles.Node}>
            <img src={nodeLogo} />
            <h1>Node Posts.</h1>
          </section>
        </Link>

        <Link href="/WebDev/WebAssembly">
          <section className={styles.WA}>
            <img src={waLogo} />
            <h1>Web Assembly Posts.</h1>
          </section>
        </Link>
      </main>
    );
  }
}

export default WebDev;
