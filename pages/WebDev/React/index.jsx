import React from "react";

import styles from "../GlobalStyle/WebDevPosts.module.css";
import BaseCategory from "../../../Components/BaseCategory";

const reactLogo = require("../../../public/Assets/physics.png");

const ReactPosts = () => {
  return (
    <BaseCategory
      logo={reactLogo}
      category="react"
      postCategory="React"
      styles={styles}
    />
  );
};

export default ReactPosts;
