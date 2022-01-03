import React from "react";
import moment from "moment";
import Top from "./Top";
import Body from "./Body";
import AddCommentForm from "../Comments/AddCommentForm";
import AllComments from "../Comments/Comments";

const BlogContent = ({ content }) => {
  const formatDate = (date) => {
    console.log(moment(date).format("MMM Do YYYY"));
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
