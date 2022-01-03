import React from "react";
import parse from "html-react-parser";

import styles from "./style.module.css";

const Body = ({ content }) => {
  return <article className={styles.Body}>{parse(String(content))}</article>;
};

export default Body;
