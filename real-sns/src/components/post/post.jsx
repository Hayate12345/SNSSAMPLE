import React, { useState } from 'react';
import './post.css';
import { AiOutlineMore } from 'react-icons/ai';
import { Users } from '../../date';

// ファンクションの後の単語小文字はNG
export default function Post({ postDate }) {
  // いいね機能の作成
  const [like, setLike] = useState(postDate.like);

  // いいねを押しているかいないかの判断をする
  const [liked, setLiked] = useState(false);

  // いいねを押していな場合いいねが1増える、いいねを押している場合いいねが1減る
  const pushlike = () => {
    setLike(liked ? like - 1 : like + 1);
    setLiked(!liked);
  };

  return (
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
            <img
              src="/assets/heart.png"
              alt=""
              className="likeIcon"
              onClick={() => pushlike()}
            />
            <span className="likeText">{like}人がいいねしました</span>
          </div>

          <div className="bottomRight">
            <span className="CommentText">{postDate.comment}:件のコメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
