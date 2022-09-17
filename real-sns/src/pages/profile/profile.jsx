import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/Topbar/Topbar';
import TimeLine from '../../components/timeline/timeline';
import Rightbar from '../../components/rightbar/rightbar';
import './profile.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  // ファイルのパスを楽に使う
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});

  // ユーザネームを取得する
  const username = useParams().username;

  // プロフィール情報を取得する
  useEffect(() => {
    // 非同期処理のためasyncとawait必要
    const async = async () => {
      // timelineはgetメソッドで取得できたよね
      const response = await axios.get(
        // エンドポイントを指定して取得する 投稿した人のユーザーIDを取得
        `/user?username=${username}`
      );
      console.log(response);
      // 変数に格納 .data必要
      setUser(response.data);
    };
    async();
    // postDate.userIdなぜ必要なのか
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || PUBLIC_FOLDER + '/post/2.jpeg'}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  user.profilePicture || PUBLIC_FOLDER + '/person/noAvatar.png'
                }
                alt=""
                className="profileUserImg"
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
              {/* <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span> */}
            </div>
          </div>

          <div className="profileRightBottom">
            <TimeLine username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
