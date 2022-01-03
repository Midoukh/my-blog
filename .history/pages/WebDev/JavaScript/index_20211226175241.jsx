import React from "react";
import axios from "axios";

import styles from "../GlobalStyle/WebDevPosts.module.css";
import Blog from "../../../Components/Blogs/Blog/Blog";
import { origin } from "../../../utils/constants";
import Spinner from "../../../Components/Spinner";

const jsLogo = require("../../../public/Assets/JavaScript-logo.png");
class JavaScriptPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isPosts: true,
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
      const isPosts = res.data.data.length ? true : false;
      this.setState({ data: posts, isPosts });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    }
  };
  render() {
    const noBlogs = !this.state.isPosts ? (
      <div className={styles.NoPosts}>
        <h1>
          <span>😲</span> No Posts available
        </h1>
      </div>
    ) : (
      <Spinner />
    );

    return (
      <main className={styles.WebDevPostsContainer}>
        <header>
          <img src={jsLogo} />
          <h1>Java Script Posts.</h1>
        </header>
        {this.state.data.length === 0
          ? noBlogs
          : this.state.data.map((blg) => (
              <div className={styles.Grid}>
                <Blog
                  key={blg._id}
                  name={blg.title}
                  bg="linear-gradient(45deg, #1f1a24da, #2f1a24df)"
                  link={`/post/${blg.slug}`}
                />
              </div>
            ))}
      </main>
    );
  }
}

export default JavaScriptPosts;
