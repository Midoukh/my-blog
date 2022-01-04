import React from "react";
import styles from "./styles.module.css";
const Separator = ({ title }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Separator}>
        <div className={styles.Active}></div>
      </div>
    </div>
  );
};

export default Separator;