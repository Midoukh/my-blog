import React from "react";
import Blog from "./Blog/Blog";
import styles from "./Blogs.module.css";
class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <main className={styles.Blogs}>
        {this.state.data.map((item) => (
          <Blog name={item} bg={this.props.bg} />
        ))}
      </main>
    );
  }
}
export default Blogs;
