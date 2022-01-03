import React, { useState } from "react";
import styles from "./style.module.css";
import Card from "../../../UI/skeletons/Card";
import Tags from "../../Tags";
import TitleSkeleton from "../../../UI/skeletons/Title";

const Top = ({ title, author, coverture, tags, date }) => {
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={styles.Top}
      style={{
        backgroundImage: `url('${coverture}')`,
      }}
    >
      <div className={styles.TitleWrapper}>
        {!title ? <TitleSkeleton /> : <h1>{title.toUpperCase()}</h1>}
      </div>
      <div className={styles.Author}>
        <img
          src={author.avatar}
          alt="avatar"
          onLoad={(l) => setLoaded(true)}
          style={{
            visibility: loadingAvatar ? "hidden" : "visible",
          }}
        />
        {loadingAvatar && <Card />}
        <h4>{author && author.name}</h4>
      </div>
      <div className={styles.PubDate}>
        <h6>Originally Published on {date}🧡</h6>
      </div>
      <Tags listOfTags={tags} />
      <div className={styles.Layer}></div>
    </div>
  );
};

export default Top;
