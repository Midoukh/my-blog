import React, { useState } from "react";

import AddCommentForm from "../AddCommentForm";
import ReactionBlock from "../Emoji/ReactionBlock";
import ReactioBlock from "../Emoji/ReactionBlock";

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
        <span className="comment-info">
          Comment by <strong>{comment.name}</strong> on{" "}
          <strong>{comment._createdAt}</strong>
        </span>
      </span>
      <p className="comment-content">{comment.comment.trim()}</p>
      <div className="reaction-div">
        <button onClick={toggleReplyBox}>Reply</button>
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
