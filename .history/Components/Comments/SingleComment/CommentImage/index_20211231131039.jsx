import React from "react";
const blogLogo = require("../../../../public/Assets/");

export default function CommentImage({ commentImage, username }) {
  const commentImageSrc = document.querySelector(".Nav img").src;
  console.log(document.querySelector(".Nav img"));
  return (
    <div className="commentImage">
      <img src={commentImageSrc}></img>
    </div>
  );
}
