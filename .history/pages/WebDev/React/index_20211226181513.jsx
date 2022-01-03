import React from "react";
import axios from "axios";

import Blog from "../../../Components/Blogs/Blog/Blog";
import styles from "../GlobalStyle/WebDevPosts.module.css";
import { origin } from "../../../utils/constants";

import Spinner from "../../../Components/Spinner";
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
