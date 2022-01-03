import React from "react";
import parse from "html-react-parser";

import styles from "./style.module.css";
import Paragraph from "../../../UI/skeletons/Paragraph";
const Body = ({ content }) => {
  return (
    <article className={styles.Body}>
      {!content ? <Paragraph /> : parse(String(content))}
    </article>
  );
};

export default Body;
