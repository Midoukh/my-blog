import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

import BlogContent from "../../Components/BlogContent/BlogContent";
import BlogSkeleton from "../../UI/skeletons/Blog";
const Post = () => {
  const [postContent, setPostContent] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  const handleFetchPost = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/blogs/get/${slug}`);

      console.log(res);
      setPostContent((prev) => res.data.data[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetchPost();
  }, [slug]);
  return (
    <div>
      <Head>
        <title>{loading ? "Post" : postContent.title}</title>
      </Head>

      <BlogSkeleton />
    </div>
  );
};

export default Post;
