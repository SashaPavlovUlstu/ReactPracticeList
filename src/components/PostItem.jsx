import React from "react";
import cl from "../styles/PostItem.module.css";
const PostItem = ({ className = "" ,post}) => {
  return (
    <div className={`${cl.mainDiv} ${cl[className]}`}>
      <img
        className={cl.img}
        src="https://media1.tenor.com/m/pNxbWHpUiTMAAAAC/clash-royale-clash-royale-goblin-emote.gif"
        alt="нет изображения"
      />
      <div className={cl.div}>
        <h1 className={cl.headText}>{post.name}</h1>
        <h2 className={cl.mainText}>{post.username}</h2>
      </div>
    </div>
  );
};

export default PostItem;
