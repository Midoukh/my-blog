import React from "react";
const badge = require("../../../public/Assets/wev_dev_1.png");
const badge2 = require("../../../public/Assets/wev_dev_2.png");
import ShowMoreButton from "../../../UI/ShowMoreButton/ShowMoreButton";

import styles from "./style.module.css";
import Blogs from "../../../Components/Blogs/Blogs";
const WebDev = () => {
  const data = ["post1", "post2", "post3", "post4", "post5", "post6"];
  const handleChangeBadge = (e) => {
    e.target.src = badge2;
  };
  const handleChangeBadgeAgain = (e) => {
    e.target.src = badge;
  };
  return (
    <section className={styles.WebDev}>
      <div className={styles.Head}>
        <h1>WebDev</h1>
        <img
          src={badge}
          alt="Latest badge icon"
          onMouseOver={handleChangeBadge}
          onMouseLeave={handleChangeBadgeAgain}
        />
      </div>
      <Blogs data={data} bg="linear-gradient(45deg, #000000dd, #1f1f1fdd)" />
      <div className={styles.ShowMore}>
        <ShowMoreButton content="WebDev Posts" link="/WebDev" />
      </div>
    </section>
  );
};

export default WebDev;
