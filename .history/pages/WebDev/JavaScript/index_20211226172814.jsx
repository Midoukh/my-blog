import React from "react";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import Link from "next/link";

import { slugifyString } from "../../../utils";

import styles from "../GlobalStyle/WebDevPosts.module.css";
import Blog from "../../../Components/Blogs/Blog/Blog";
import { origin } from "../../../utils/constants";

const jsLogo = require("../../../public/Assets/JavaScript-logo.png");
class JavaScriptPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  componentDidMount() {
    this.handleGetPosts();
  }
  handleGetPosts = async () => {
    //categories
    //react, node, java script, web assembly, books, crypto-currency
    //others
    try {
      const res = await axios.get(`${origin}/blogs/get?category=java-script`);
      console.log(res);
      const posts = res.data.data ? res.data.data : [];
      this.setState({ data: posts });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    }
  };
  render() {
    return (
      <main className={styles.WebDevPostsContainer}>
        <header>
          <img src={jsLogo} />
          <h1>Java Script Posts.</h1>
        </header>
        <div className={styles.Grid}>
          {this.state.data.length === 0 ? (
            <RingLoader
              size={50}
              color="yellow"
              style={{
                margin: "auto",
              }}
            />
          ) : (
            this.state.data.map((blg) => (
              <Blog
                key={blg._id}
                name={blg.title}
                bg="linear-gradient(45deg, #1f1a24da, #2f1a24df)"
                link={`/post/${slugifyString(blg.title)}`}
              />
            ))
          )}
        </div>
      </main>
    );
  }
}

export default JavaScriptPosts;
