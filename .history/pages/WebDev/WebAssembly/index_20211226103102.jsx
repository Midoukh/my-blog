import React from "react";
import styles from "../GlobalStyle/WebDevPosts.module.css";
const waLogo = require("../../../public/Assets/WA.png");
class WebAssemblyPosts extends React.Component {
  render() {
    return (
      <main className={styles.WebDevPostsContainer}>
        <header>
          <img src={waLogo} />
          <h1>Web Assembly Posts.</h1>
        </header>
      </main>
    );
  }
}

export default WebAssemblyPosts;
