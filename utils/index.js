export const slugifyString = (str) => {
  if (!str.length) return 0;

  return str.split(" ").join("-");
};

export const handleGetPosts = async (category) => {
  //categories
  //react, node, java script, web assembly, books, crypto-currency
  //others
  try {
    const res = await axios.get(
      `http://localhost:5000/blogs/get?category=${category}`
    );
    console.log(res);
    this.setState({ data: res.data.data });
  } catch (err) {
    console.log(err);
    this.setState({ error: err.message });
  }
};
