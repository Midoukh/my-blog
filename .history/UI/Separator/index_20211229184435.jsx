import React from "react";
import styles from "./styles.module.css";
const Separator = ({ label }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Label}>
        <h2>{label || "Separator"}</h2>
      </div>
      <div className={styles.Separator}>
        <div className={styles.Active}></div>
      </div>
    </div>
  );
};

export default Separator;
