import React, { useState } from "react";
import parser from "../../lib/snarkdown";
import AddCommentForm from "../AddCommentForm";

const Comment = ({ comment, firstParentId }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const toggleReplyBox = () => setShowReplyBox(!showReplyBox);
  return (
    <li
      key={comment._id}
      id={comment._id}
      className={firstParentId ? "child" : ""}
    >
      <span>
        <span>
          Comment by <strong>{comment.name}</strong> on{" "}
          <strong>{comment._createdAt}</strong>
        </span>
      </span>
      <p
        className="comment-content"
        dangerouslySetInnerHTML={{
          __html: parser(comment.comment.trim()),
        }}
      >
        {comment.comment.trim()}
      </p>
      <button onClick={toggleReplyBox}>Reply</button>
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
