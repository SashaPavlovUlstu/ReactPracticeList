import React from "react";
import PostItem from "./PostItem.jsx";
import cl from "../styles/PostList.module.css";
const PostList = ({ className, posts }) => {
  console.log("PostList", className);
  return (
    <div className={cl.postGrid}>
        {posts.map((post,index) => (
                <PostItem key={index} className={className} post={post} />
            ))}
    </div>
  );
};

export default PostList;
