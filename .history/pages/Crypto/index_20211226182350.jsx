import React from "react";
import styles from "../WebDev/GlobalStyle/WebDevPosts.module.css";
const cryptoIcon = require("../../public/Assets/bitcoin.png");
import BaseCategory from "../../Components/BaseCategory";

const CryptoPosts = ({}) => {
  return (
    <BaseCategory
      styles={styles}
      logo={cryptoIcon}
      category="crypto-currency"
      postCategory="Crypto"
    />
  );
};
