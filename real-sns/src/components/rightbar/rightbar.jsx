import React from 'react';
import './rightbar.css';
import { Users } from '../../date';
import Online from '../online/online';

export default function rightbar({ Profile }) {
  // homeの場合はこの値を返す
  const HomeReightbar = () => {
    return (
      <>
        <div className="content">
          <img src="/assets/star.png" className="starImg" alt="" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="/assets/ad.jpeg" className="eventImg" alt="" />
        <h4 className="title">オンラインの友達</h4>
        <ul className="friendLists">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>

        <p className="promotion">プロモーション広告</p>
        <img
          src="/assets/promotion/promotion1.jpeg"
          alt=""
          className="promotionImg"
        />
        <p className="promotionText">ショッピング</p>

        <img
          src="/assets/promotion/promotion2.jpeg"
          alt=""
          className="promotionImg"
        />
        <p className="promotionText">カーショッピング</p>

        <img
          src="/assets/promotion/promotion3.jpeg"
          alt=""
          className="promotionImg"
        />
        <p className="promotionText">不動産</p>
      </>
    );
  };

  const ProflileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身:</span>
            <span className="rightbarInfoKey">鳥取</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="./assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">ShinCode</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Yamaki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Koga</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/4.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Matukubo</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/5.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Kikukawa</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="wrap">
        {Profile ? <ProflileRightbar /> : <HomeReightbar />}
      </div>
    </div>
  );
}
