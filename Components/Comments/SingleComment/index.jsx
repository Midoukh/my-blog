import React, { useState } from "react";
import moment from "moment";
import AddCommentForm from "../AddCommentForm";
import ReactionBlock from "../Emoji/ReactionBlock";
import CommentImage from "./CommentImage";

const Comment = ({ comment, firstParentId }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const toggleReplyBox = () => setShowReplyBox(!showReplyBox);
  return (
    <li
      key={comment._id}
      id={comment._id}
      className={firstParentId ? "single-comment" : "single-comment child"}
    >
      <span className="comment-info-container">
        <CommentImage />
        <span className="comment-info">
          <strong>{comment.name}</strong> on{" "}
          <strong>{moment(comment._createdAt).format("MMM Do YY")}</strong>
        </span>
      </span>
      <p className="comment-content">{comment.comment.trim()}</p>
      <div className="reaction-div">
        <button className="reply-button" onClick={toggleReplyBox}>
          Reply
        </button>
        <ReactionBlock commentId={comment._id} />
      </div>
      {showReplyBox && (
        <AddCommentForm
          parentCommentId={comment._id}
          firstParentId={firstParentId || comment._id}
        />
      )}
    </li>
  );
};
export default Comment;
