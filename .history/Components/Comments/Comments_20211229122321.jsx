import { useState, useEffect } from "react";
import Comment from "./SingleComment";
import { writeClient as client } from "../../lib/sanityClient";

const query = `*[_type == "comment" && approved==true]{_id, comment, name, _createdAt, childComments} | order (_createdAt)`;

const AllComments = ({}) => {
  const [comments, setComments] = useState();

  useEffect(async () => {
    setComments(await client.fetch(query));
  });
};
export default AllComments;
