import React from "react";
import styles from "../WebDev/GlobalStyle/WebDevPosts.module.css";
const booksoIcon = require("../../public/Assets/read.png");
import BaseCategory from "../../Components/BaseCategory";

const BooksAndResourcesPosts = ({}) => {
  return (
    <BaseCategory
      styles={styles}
      logo={booksoIcon}
      category="books"
      postCategory="Books And Resources"
    />
  );
};

export default BooksAndResourcesPosts;
