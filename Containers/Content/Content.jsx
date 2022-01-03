import React from "react";
import styles from "./Content.module.css";
import TopPosts from "./TopPosts/TopPosts";
import Latest from "./Latest/Latest";
import Crypto from "./Crypto/Crypto";
import BooksAndResources from "./BooksAndResources/BooksAndResources";
import WebDev from "./WebDev/WebDev";
import Footer from "../../Components/Footer/Footer";
import Line from "../../UI/Line/Line";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className={styles.Content}>
        <TopPosts />
        <Line bgColor="#7FD5FA" />
        <Latest />
        <Line bgColor="#FF9F00" />
        <WebDev />
        <Line bgColor="#6283A3" />
        <Crypto />
        <Line bgColor="#FE8C01" />
        <BooksAndResources />
        <Line bgColor="#C32430" />
      </main>
    );
  }
}

export default Content;
