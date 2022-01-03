import React from "react";
const blogLogo = require("../../../../public/Assets/solvent.svg");
export default function CommentImage({}) {
  return (
    <div className="commentImage">
      <img src={blogLogo}></img>
    </div>
  );
}
