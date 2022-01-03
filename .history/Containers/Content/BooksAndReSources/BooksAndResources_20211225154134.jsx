import React from "react";
const badge = require("../../../public/Assets/read.png");
const badge2 = require("../../../public/Assets/read (1).png");

import styles from "./BooksAndResources.module.css";
import Blogs from "../../../Components/Blogs/Blogs";
import ShowMoreButton from "../../../UI/ShowMoreButton/ShowMoreButton";

const BooksAndResources = () => {
  const data = ["post1", "post2", "post3", "post4", "post5", "post6"];
  const handleChangeBadge = (e) => {
    e.target.src = badge2;
  };
  const handleChangeBadgeAgain = (e) => {
    e.target.src = badge;
  };
  return (
    <section className={styles.BooksAndResources}>
      <div className={styles.Head}>
        <h1>BooksAndResources</h1>
        <img
          src={badge}
          alt="BooksAndResources badge icon"
          onMouseOver={handleChangeBadge}
          onMouseLeave={handleChangeBadgeAgain}
        />
      </div>
      <Blogs data={data} bg="linear-gradient(45deg,#c32431c5, #d44851be)" />
      <div className={styles.ShowMore}>
        <ShowMoreButton content="Books and Resources Posts" />
      </div>
    </section>
  );
};

export default BooksAndResources;
