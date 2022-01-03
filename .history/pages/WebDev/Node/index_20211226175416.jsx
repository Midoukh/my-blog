import React from "react";
import styles from "../GlobalStyle/WebDevPosts.module.css";
const nodeLogo = require("../../../public/Assets/node-js-icon.png");
class NodePosts extends React.Component {
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
      const res = await axios.get(`${origin}/blogs/get?category=react`);
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
    return (
      <main className={styles.WebDevPostsContainer}>
        <header>
          <img src={nodeLogo} style={{ borderRadius: "50%" }} />
          <h1>Node Posts.</h1>
        </header>
      </main>
    );
  }
}

export default NodePosts;
