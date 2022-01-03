import React from "react";
const blogLogo = require("../../../../public/Assets/solvent.svg");
export default function CommentImage({}) {
  return (
    <div className="commentImage">
      <div></div>
      <img src={blogLogo}></img>
    </div>
  );
}
