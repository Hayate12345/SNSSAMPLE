import React from 'react';
import './rightbar.css';
import { Users } from '../../date';
import Online from '../online/online';

export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="wrap">
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
      </div>
    </div>
  );
}
