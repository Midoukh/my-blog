import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Footer.module.css";

const Footer = () => {
  const [avatar, setAvatar] = useState("");
  const handleGetMyInfoFromGitHub = async () => {
    const response = await axios.get("https://api.github.com/users/Midoukh");
    setAvatar((prev) => response.data.avatar_url);
  };
  const handleGoToGithub = () => {
    window.open("https://github.com/Midoukh", "_blank").focus();
  };
  useEffect(() => {
    handleGetMyInfoFromGitHub();
  });
  return (
    <div className={styles.Footer}>
      <div className={styles.AvatarWrapper}>
        <img src={avatar} alt="avatar" onClick={handleGoToGithub} />
      </div>
      <div className={styles.Details}>
        <h1>Ahmed Khelili</h1>
        <h3>Web Developer</h3>
        <h3>CS student</h3>
        <a href="https://www.ahmedkhelili.dev">
          <h2>ahmedkhelili.dev</h2>
        </a>
        <h4>© Ahmed Khelili 2020</h4>
      </div>
    </div>
  );
};

export default Footer;
