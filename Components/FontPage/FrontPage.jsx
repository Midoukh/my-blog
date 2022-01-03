import React from "react";
import styles from "./FrontPage.module.css";
const avatar = require("../../public/Assets/man.png");
const FrontPage = () => {
  return (
    <section className={styles.FrontPage}>
      <img src={avatar} />
      <h1>Software Development</h1>
      <h4>and other cool stuff</h4>
    </section>
  );
};

export default FrontPage;
