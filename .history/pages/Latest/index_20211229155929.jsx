import React from "react";
import styles from "../WebDev/GlobalStyle/WebDevPosts.module.css";
const hotIcon = require("../../public/Assets/trending.png");
import BaseCategory from "../../Components/BaseCategory";

const LatestPosts = ({}) => {
  return (
    <BaseCategory
      styles={styles}
      logo={hotIcon}
      category="*"
      postCategory="HOT"
    />
  );
};

export default LatestPosts;
