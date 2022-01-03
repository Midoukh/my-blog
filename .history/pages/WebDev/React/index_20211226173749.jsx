import React from "react";
import Blog from "../../../Components/Blogs/Blog/Blog";
import styles from "../GlobalStyle/WebDevPosts.module.css";
import { origin, slugifyString } from "../../../utils/constants";
import Spinner from "../../../Components/Spinner";
const reactLogo = require("../../../public/Assets/physics.png");

class ReactPosts extends React.Component {
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
      const isPosts = res.data.data ? true : false;
      this.setState({ data: posts, isPosts });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    }
  };
  render() {
    const noBlogs = !this.state.isPosts ? (
      <div>
        <h1>😲 No Posts available</h1>
      </div>
    ) : (
      <Spinner />
    );

    return (
      <main className={styles.WebDevPostsContainer}>
        <header>
          <img src={reactLogo} />
          <h1>React Posts.</h1>
        </header>
        <div className={styles.Grid}>
          {this.state.data.length === 0
            ? { noBlogs }
            : this.state.data.map((blg) => (
                <Blog
                  key={blg._id}
                  name={blg.title}
                  bg="linear-gradient(45deg, #1f1a24da, #2f1a24df)"
                  link={`/post/${slugifyString(blg.title)}`}
                />
              ))}
        </div>
      </main>
    );
  }
}

export default ReactPosts;
