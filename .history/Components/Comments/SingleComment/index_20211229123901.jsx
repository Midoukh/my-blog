import React, { useState } from "react";
import AddCommentForm from "../AddCommentForm";
const Comment = ({ comment }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const toggleReplyBox = () => setShowReplyBox(!showReplyBox);
  return (
    <li key={comment._id} id={comment._id}>
      <span>
        <span>
          Comment by <strong>{comment.name}</strong> on{" "}
          <strong>{comment._createdAt}</strong>
        </span>
      </span>
      <p>{comment.comment.trim()}</p>
      <button onClick={toggleReplyBox}>Reply</button>
      {showReplyBox && (
        <AddComment
          parentCommentId={comment._id}
          firstParentId={firstParentId || comment._id}
        />
      )}
    </li>
  );
};
export default Comment;
