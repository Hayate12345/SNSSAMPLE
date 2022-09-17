import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/Topbar/Topbar';
import TimeLine from '../../components/timeline/timeline';
import Rightbar from '../../components/rightbar/rightbar';
import './profile.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Profile() {
  // ファイルのパスを楽に使う
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});

  // リロード時にDBから一度だけ情報を取得する
  useEffect(() => {
    // 非同期処理のためasyncとawait必要
    const async = async () => {
      // timelineはgetメソッドで取得できたよね
      const response = await axios.get(
        // エンドポイントを指定して取得する 投稿した人のユーザーIDを取得
        `/user/`
      );
      console.log(response);
      // 変数に格納 .data必要
      setUser(response.data);
    };
    async();
    // postDate.userIdなぜ必要なのか
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + '/post/3.jpeg'}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER + '/person/1.jpeg'}
                alt=""
                className="profileUserImg"
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">hayate</h4>
              <span className="profileInfoDesc">
                天才プログラマーですけど、なんか文句ある？？
              </span>
              {/* <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span> */}
            </div>
          </div>

          <div className="profileRightBottom">
            <TimeLine username="toge" />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
}
