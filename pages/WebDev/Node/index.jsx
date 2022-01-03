import React from "react";
import styles from "../GlobalStyle/WebDevPosts.module.css";
const nodeLogo = require("../../../public/Assets/node-js-icon.png");
import BaseCategory from "../../../Components/BaseCategory";
const NodePosts = ({}) => {
  return (
    <BaseCategory
      category="node"
      styles={styles}
      postCategory="Node"
      logo={nodeLogo}
    />
  );
};

export default NodePosts;
