import React from "react";
import styles from "./style.module.css";
import Tag from "./Tag";

const Tags = ({ listOfTags }) => {
  return (
    <div className={styles.Tags}>
      {listOfTags.map((tag) => (
        <Tag title={tag} key={tag} />
      ))}
    </div>
  );
};

export default Tags;
