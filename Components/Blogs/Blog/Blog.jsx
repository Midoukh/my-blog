import React from "react";
import Link from "next/link";
import styles from "./Blog.module.css";
const blogBG = require("../../../public/Assets/react-js-ill.png");
const Blog = ({ name, bg, link }) => {
  //receive bg and title as props
  return (
    <Link href={link || "#"}>
      <div
        className={styles.Blog}
        style={{
          backgroundImage: `url('${blogBG}')`,
        }}
      >
        <h1>{name}</h1>
        <div
          className={styles.Layer}
          style={{
            backgroundImage: bg,
          }}
        ></div>
      </div>
    </Link>
  );
};

export default Blog;
