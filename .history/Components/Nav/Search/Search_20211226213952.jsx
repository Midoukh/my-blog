import React, { useRef, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Spinner from "../../Spinner";
import axios from "axios";
import styles from "./Search.module.css";
import { origin } from "../../../utils/constants";
const search = require("../../../public/Assets/search.svg");
const javaScriptIcon = require("../../../public/Assets/JavaScript-logo.png");

const Search = () => {
  const searchRef = useRef();

  const [posts, setPosts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExpandSearchBar = (e) => {
    const newWidth = "22vw";

    searchRef.current.style.width = newWidth;
  };
  const handleDecreaseSearchBar = (e) => {
    const newWidth = "20vw";

    searchRef.current.style.width = newWidth;
  };
  const handleSearch = async (e) => {
    const { value } = e.target;
    setLoading((prev) => true);
    try {
      const res = await axios.get(`${origin}/blogs/get?search=${value}`);
      const posts = res.data.data.length ? res.data.data : [];
      setPosts((pre) => posts);
      setLoading((prev) => false);
      setShowSuggestions((prev) => true);
    } catch (err) {
      console.log(err);
      setLoading((prev) => false);
    }
  };
  return (
    <div className={styles.Search} ref={searchRef}>
      {loading ? (
        <RingLoader size={30} color="#fff" css="margin-right: 1.5rem" />
      ) : (
        <img className={styles.searchIcon} src={search} />
      )}
      <input
        type="text"
        placeholder="type here"
        onFocus={handleExpandSearchBar}
        onBlur={handleDecreaseSearchBar}
        onKeyUp={handleSearch}
      />
      {showSuggestions && (
        <div className={styles.Suggestions}>
          {!posts.length ? (
            <RingLoader size={30} color="#fff" css="margin: auto" />
          ) : (
            posts.map((pst) => (
              <div key={pst._id} className={styles.Suggestion}>
                <img src={javaScriptIcon} alt="" />
                <h5>{pst.title}</h5>
              </div>
            ))
			<div className={styles.Suggestion}>
                <h5>Show All</h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
