import React from "react";
import Link from "next/link";
import styles from "./ShowMoreButton.module.css";

const ShowMoreButton = ({ content, link }) => {
  return (
    <Link href={link || "#"}>
      <button className={styles.ShowMoreButton}>All {content}</button>
    </Link>
  );
};

export default ShowMoreButton;
