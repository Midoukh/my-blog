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
        title={content.title}
        author={content.author}
        tags={content.tags}
        coverture={content.mainImage}
        date={formatDate(content.createdAt)}
      />
      <Body content={content.content} />
      <Separator title="Comment" />
      <AddCommentForm blogId={content._id} />
      <AllComments />
    </main>
  );
};

export default BlogContent;
