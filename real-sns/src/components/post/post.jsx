import React from 'react';
import './post.css';
import { AiOutlineMore } from 'react-icons/ai';
import { Users } from '../../date';

export default function post({ postDate }) {
  return (
    // ユーザー名を取得し表示する

    <div className="post">
      <div className="wrap">
        <div className="postTop">
          <div className="postLeft">
            <img
              src={
                Users.filter((user) => user.id === postDate.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="userName">
              {/* 投稿のカラムからユーザーIDを取得 -> ユーザー名を出力 */}
              {Users.filter((user) => user.id === postDate.userId)[0].username}
            </span>
            <span className="date">{postDate.date}</span>
          </div>

          <div className="postTopRight">
            <AiOutlineMore className="icon" />
          </div>
        </div>

        <div className="postCenter">
          <span className="text">{postDate.desc}</span>
          <img src={postDate.photo} alt="" />
        </div>

        <div className="bottom">
          <div className="bottomLeft">
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="likeText">{postDate.like}人がいいねしました</span>
          </div>

          <div className="bottomRight">
            <span className="CommentText">{postDate.comment}:件のコメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
