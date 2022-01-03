import React from "react";
import Top from "./Top";
import Body from "./Body";
import AddCommentForm from "../Comments/AddCommentForm";
import AllComments from "../Comments/Comments";

const BlogContent = ({ content }) => {
  console.log(content);
  const formatDate = (date) => {
    const dateObj = new Date(formatDate);
    console.log(dateObj.getFullYear());
    console.log(dateObj.getMonth());
    console.log(dateObj.getDay());
  };
  return (
    <main>
      <Top
        title={content.title}
        author={content.author}
        tags={content.tags}
        coverture={content.mainImage}
        date={formatDate(content.createdAt)}
      />
      <Body content={content.content} />
      <AddCommentForm blogId={content._id} />
      <AllComments />
    </main>
  );
};

export default BlogContent;
