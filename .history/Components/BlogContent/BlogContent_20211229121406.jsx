import React from "react";
import Top from "./Top";
import Body from "./Body";
import AddCommentForm from "../Comments/AddCommentForm";

const BlogContent = ({ content }) => {
  console.log(content);
  return (
    <main>
      <Top
        title={content.title}
        author={content.author}
        tags={content.tags}
        coverture={content.mainImage}
      />
      <Body content={content.content} />
      <AddCommentForm blogId={content._id} />
    </main>
  );
};

export default BlogContent;
