import React from "react";
import axios from "axios";
import Blog from "../../Components/Blogs/Blog/Blog";
import { origin } from "../../utils/constants";

import Spinner from "../../Components/Spinner";

class BaseCategory extends React.Component {
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
      const res = await axios.get(
        `${origin}/blogs/get?category=${this.props.category}`
      );
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
      <div className={this.props.styles.NoPosts}>
        <h1>
          <span>😲</span> No Posts available
        </h1>
      </div>
    ) : (
      <Spinner />
    );

    return (
      <main className={this.props.styles.WebDevPostsContainer}>
        <header>
          <img src={this.props.logo} />
          <h1>{this.props.postCategory} Posts.</h1>
        </header>
        {this.state.data.length === 0
          ? noBlogs
          : this.state.data.map((blg) => (
              <div className={this.props.styles.Grid}>
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

export default BaseCategory;
