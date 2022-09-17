import React from 'react';
import './sidebar.css';
import { AiFillHome, AiTwotoneBell, AiTwotoneSetting } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { BsFillBookmarkFill, BsFillPersonFill } from 'react-icons/bs';
import Friend from '../friend/friend';
import { Users } from '../../date';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side-wrap">
        <ul className="ul">
          <li className="list-item">
            <AiFillHome className="icon" />

            {/* 画面遷移toでエンドポイントを指定する */}
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <span className="listText">ホーム</span>
            </Link>
          </li>

          <li className="list-item">
            <BiSearch className="icon" />
            <span className="listText">検索</span>
          </li>

          <li className="list-item">
            <AiTwotoneBell className="icon" />
            <span className="listText">通知</span>
          </li>

          <li className="list-item">
            <MdMessage className="icon" />
            <span className="listText">メッセージ</span>
          </li>

          <li className="list-item">
            <BsFillBookmarkFill className="icon" />
            <span className="listText">ブックマーク</span>
          </li>

          <li className="list-item">
            <BsFillPersonFill className="icon" />
            <Link
              to="/profile:username"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <span className="listText">プロフィール</span>
            </Link>
          </li>

          <li className="list-item">
            <AiTwotoneSetting className="icon" />
            <span className="listText">設定</span>
          </li>
        </ul>
        <hr className="list-hr" />

        <ul className="ur2">
          {Users.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
