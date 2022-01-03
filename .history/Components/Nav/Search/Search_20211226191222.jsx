import React, { useRef, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

import axios from "axios";
import styles from "./Search.module.css";
import { origin } from "../../../utils/constants";
const search = require("../../../public/Assets/search.svg");

const Search = () => {
  const searchRef = useRef();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExpandSearchBar = (e) => {
    const newWidth = "15vw";

    searchRef.current.style.width = newWidth;
  };
  const handleDecreaseSearchBar = (e) => {
    const newWidth = "12vw";

    searchRef.current.style.width = newWidth;
  };
  const handleSearch = async (e) => {
    const { value } = e.target;
    setLoading((prev) => true);
    try {
      const res = await axios.get(`${origin}/blogs/get?search=${value}`);
      console.log(res);
      setLoading((prev) => false);
    } catch (err) {
      console.log(err);
      setLoading((prev) => false);
    }
  };
  return (
    <div className={styles.Search} ref={searchRef}>
      {loading ? (
        <RingLoader size={30} color="#fff" />
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
      {showSuggestions && <div className={styles.Suggestions}></div>}
    </div>
  );
};

export default Search;
