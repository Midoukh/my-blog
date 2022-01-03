import React, { useRef } from "react";
import axios from "axios";
import styles from "./Search.module.css";
const search = require("../../../public/Assets/search.svg");

const Search = () => {
  const searchRef = useRef();
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
    console.log(value);
    try {
      const res = await axios.post(`${origin}/blogs/get?search=${value}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.Search} ref={searchRef}>
      <img className={styles.searchIcon} src={search} />
      <input
        type="text"
        placeholder="type here"
        onFocus={handleExpandSearchBar}
        onBlur={handleDecreaseSearchBar}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
