import React from "react";
import BaseCategory from "../../../Components/BaseCategory";
import styles from "../GlobalStyle/WebDevPosts.module.css";
const waLogo = require("../../../public/Assets/WA.png");
const WebAssemblyPosts = ({}) => {
  return (
    <BaseCategory
      logo={waLogo}
      category="web-assembly"
      postCategory="Web Assembly"
      styles={styles}
    />
  );
};

export default WebAssemblyPosts;
