import React from "react";
import styles from "./style.module.css";
const tagIcon = require("../../../public/Assets/tag.png");
const Tag = ({ title }) => {
  return (
    <div className={styles.Tag}>
      <img src={tagIcon} alt="tag" />
      <h5>{title}</h5>
    </div>
  );
};

export default Tag;
