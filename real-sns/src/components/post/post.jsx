import React from 'react';
import './post.css';
import { AiOutlineMore } from 'react-icons/ai';

export default function post() {
  return (
    <div className="post">
      <div className="wrap">
        <div className="postTop">
          <div className="postLeft">
            <img src="/assets/person/1.jpeg" alt="" />
            <span className="userName">shinCode</span>
            <span className="date">5分前</span>
          </div>

          <div className="postTopRight">
            <AiOutlineMore className="icon" />
          </div>
        </div>

        <div className="postCenter">
          <span className="text">颯くんです</span>
          <img src="/assets/post/1.jpeg" alt="" />
        </div>

        <div className="bottom">
          <div className="bottomLeft">
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="likeText">5人がいいねを押しました</span>
          </div>

          <div className="bottomRight">
            <span className="CommentText">5:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
