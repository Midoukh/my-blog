import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

import BlogContent from "../../Components/BlogContent/BlogContent";
import BlogSkeleton from "../../UI/skeletons/Blog";
const Post = () => {
  const [postContent, setPostContent] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  const handleFetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/blogs/get/${slug}`);

      console.log(res);
      setPostContent((prev) => res.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleFetchPost();
  }, [slug]);
  return (
    <div>
      <Head>
        <title>{postContent === {} ? "Post" : postContent.title}</title>
      </Head>
      {postContent === {} ? (
        <BlogSkeleton />
      ) : (
        <BlogContent content={postContent} />
      )}
    </div>
  );
};

export default Post;
