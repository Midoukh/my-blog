import React from "react";
import moment from "moment";
import Top from "./Top";
import Body from "./Body";
import AddCommentForm from "../Comments/AddCommentForm";
import AllComments from "../Comments/Comments";
import Separator from "../../UI/Separator";

const BlogContent = ({ content }) => {
  const formatDate = (date) => moment(date).format("MMM Do YYYY");
  return (
    <main>
      <Top
        title={content !== {} && content.title}
        author={content !== {} && content.author}
        tags={content !== {} && content.tags}
        coverture={content !== {} && content.mainImage}
        date={content !== {} && formatDate(content.createdAt)}
      />
      <Body content={content.content} />
      <Separator label="Comments" />
      <AddCommentForm blogId={content._id} />
      <AllComments />
    </main>
  );
};

export default BlogContent;
