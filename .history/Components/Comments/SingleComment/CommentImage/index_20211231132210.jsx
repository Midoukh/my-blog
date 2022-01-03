import React from "react";

export default function CommentImage({ commentImage, username }) {
  //   const commentImageSrc = document.querySelector(".Nav img").src;
  const commentImageSrc =
    document.querySelector("nav img").className.includes("Nav_logo") &&
    document.querySelector("nav img").src;
  return (
    <div className="commentImage">
      <img src={commentImageSrc}></img>
    </div>
  );
}
