import { useState, useEffect } from "react";
import Comment from "./SingleComment";
import { writeClient as client } from "../../lib/sanityClient";

const query = `*[_type == "comment" && approved==true]{_id, comment, name, _createdAt, childComments} | order (_createdAt)`;
let querySub = undefined;
const AllComments = ({}) => {
  const [comments, setComments] = useState();

  useEffect(async () => {
    setComments(await client.fetch(query));
    // Subscribe to the query, listening to new updates
    // If there's an update, add it to the comments state and sort it again
    // The update might occur on a comment we already have in the state,
    // so we should filter out that comment from the previous state
    querySub = client.listen(query).subscribe((update) => {
      if (update) {
        setComments((comments) =>
          [
            ...comments.filter((comment) => comment._id !== update.result._id),
            update.result,
          ].sort((a, b) => (a._createdAt > b._createdAt ? 1 : -1))
        );
      }
    });

    // Unsubscribe on Component unmount
    return () => {
      querySub.unsubscribe();
    };
  });
  const commentList = comments?.map((comment) => {
    return (
      <Comment
        key={comment._id}
        comment={comment}
        firstParentId={comment.firstParentId || comment._id}
      />
    );
  });

  return <ul>{commentList}</ul>;
};
export default AllComments;
