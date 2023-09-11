import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

import BlogContent from "../../Components/BlogContent/BlogContent";
import BlogSkeleton from "../../UI/skeletons/Blog";
import { origin } from "../../utils/constants";

const Post = () => {
  const [postContent, setPostContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [postTitle, setPostTitle] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  const handleFetchPost = async (isMounted) => {
    const noSlug = location.pathname.split("/")[2];
    try {
      const res = await axios.get(`${origin}/blogs/get/${slug || noSlug}`);
      if (isMounted) setPostContent((prev) => res.data.data[0]);

      if (Object.keys(postContent).length !== 0) {
        setLoading(false);
        setPostTitle((prev) => res.data.data[0].title);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    let isMounted = true;
    handleFetchPost(isMounted);

    return () => (isMounted = false);
  }, [loading, postContent, postTitle]);
  return (
    <div>
      <Head>
        <title>{loading ? "Post" : postTitle}</title>
      </Head>
      {loading ? (
        <>
          <BlogSkeleton />
          <BlogSkeleton />
        </>
      ) : (
        <BlogContent content={postContent} />
      )}
    </div>
  );
};

export default Post;
