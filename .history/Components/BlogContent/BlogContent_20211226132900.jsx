import React from "react";
import Top from "./Top";
import Body from "./Body";

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
    </main>
  );
};

export default BlogContent;
