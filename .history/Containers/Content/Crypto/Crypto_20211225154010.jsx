import React from "react";
const badge = require("../../../public/Assets/bitcoin.png");
const badge2 = require("../../../public/Assets/bitcoin (1).png");

import styles from "./Crypto.module.css";
import Blogs from "../../../Components/Blogs/Blogs";
import ShowMoreButton from "../../../UI/ShowMoreButton/ShowMoreButton";

const Crypto = () => {
  const data = ["post1", "post2", "post3", "post4", "post5", "post6"];
  const handleChangeBadge = (e) => {
    e.target.src = badge2;
  };
  const handleChangeBadgeAgain = (e) => {
    e.target.src = badge;
  };
  return (
    <section className={styles.Crypto}>
      <div className={styles.Head}>
        <h1>CryptoCurrencies</h1>
        <img
          src={badge}
          alt="Crypto badge icon"
          onMouseOver={handleChangeBadge}
          onMouseLeave={handleChangeBadgeAgain}
        />
      </div>
      <Blogs data={data} bg="linear-gradient(45deg,#ffb428d1, #fedf54c5)" />
      <div className={styles.ShowMore}>
        <ShowMoreButton content="CryptoCurrencies Posts" />
      </div>
    </section>
  );
};

export default Crypto;
