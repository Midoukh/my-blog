import React, { useRef, useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import Link from "next/link";
import axios from "axios";
import { nanoid } from "nanoid";
import styles from "./Search.module.css";
import { origin } from "../../../utils/constants";
const search = require("../../../public/Assets/search.svg");
const javaScriptIcon = require("../../../public/Assets/JavaScript-logo.png");
const reactIcon = require("../../../public/Assets/physics.png");

const categoriesIcons = {
  "java script": javaScriptIcon,
  react: reactIcon,
};

const Search = () => {
  const searchRef = useRef();

  const [posts, setPosts] = useState([]);
  const [noPosts, setNoPosts] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExpandSearchBar = (e) => {
    let newWidth = "22vw";

    if (window.innerWidth <= 800) newWidth = "42vw";

    searchRef.current.style.width = newWidth;
  };
  const handleDecreaseSearchBar = (e) => {
    let newWidth = "20vw";
    if (window.innerWidth <= 800) newWidth = "40vw";
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
      if (posts.length === 0) setNoPosts((prev) => true);
    } catch (err) {
      console.log(err);
      setLoading((prev) => false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target.id !== "suggestions" ||
        e.target.parentElement.id !== "suggestions"
      ) {
        setShowSuggestions((prev) => false);
      }
    });
  });
  //categories
  //react, node, java script, web assembly, books, crypto-currency
  //others
  let noSearchPlaceHolder;
  if (!posts.length) {
    noSearchPlaceHolder = (
      <RingLoader size={30} color="#fff" css="margin-right: 1.5rem" />
    );
    if (noPosts) {
      noSearchPlaceHolder = (
        <h3 style={{ margin: "0", margin: "0.5rem" }}>No Post Was Found 🐵</h3>
      );
    }
  }
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
        onChange={handleSearch}
      />
      {showSuggestions && (
        <div className={styles.Suggestions} id="suggestions">
          {!posts.length ? (
            noSearchPlaceHolder
          ) : (
            <>
              {posts.map((pst) => (
                <Link href={`/post/${pst.slug}`} key={nanoid()}>
                  <div key={pst._id} className={styles.Suggestion}>
                    <img src={categoriesIcons[pst.category]} alt="category" />
                    <h5>{pst.title}</h5>
                  </div>
                </Link>
              ))}
              {posts.length > 2 && (
                <div
                  className={styles.Suggestion}
                  style={{ justifyContent: "center" }}
                >
                  <h5>Show All</h5>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
