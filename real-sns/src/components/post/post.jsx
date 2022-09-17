import React, { useState, useEffect } from 'react';
import './post.css';
import { AiOutlineMore } from 'react-icons/ai';
import axios from 'axios';
import { format } from 'timeago.js';

// ファンクションの後の単語小文字はNG
export default function Post({ postDate }) {
  // Dbから取得した情報を格納する変数 配列ではなくてオブジェクト
  const [user, setUser] = useState({});

  // リロード時にDBから一度だけ情報を取得する
  useEffect(() => {
    // 非同期処理のためasyncとawait必要
    const async = async () => {
      // timelineはgetメソッドで取得できたよね
      const response = await axios.get(
        // エンドポイントを指定して取得する 投稿した人のユーザーIDを取得
        `/user/${postDate.userId}`
      );
      console.log(response);
      // 変数に格納 .data必要
      setUser(response.data);
    };
    async();
    // postDate.userIdなぜ必要なのか
  }, [postDate.userId]);

  // いいね機能の作成 Lengthの追加でDbから数をカウント
  const [like, setLike] = useState(postDate.likes.length);

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
              src={user.profilePicture || './assets/person/noAvatar.png'}
              alt=""
            />
            <span className="userName">
              {/* 投稿のカラムからユーザーIDを取得 -> ユーザー名を出力 */}
              {user.username}
            </span>
            {/* formatagoで何日前なのか見れる */}
            <span className="date">{format(postDate.createdAt)}</span>
          </div>

          <div className="postTopRight">
            <AiOutlineMore className="icon" />
          </div>
        </div>

        <div className="postCenter">
          <span className="text">{postDate.desc}</span>
          <img src={'./assets/' + postDate.img} alt="" />
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
