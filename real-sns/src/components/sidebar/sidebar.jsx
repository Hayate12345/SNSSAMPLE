import React from 'react';
import './sidebar.css';
import { AiFillHome, AiTwotoneBell, AiTwotoneSetting } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { BsFillBookmarkFill, BsFillPersonFill } from 'react-icons/bs';

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="side-wrap">
        <ul className="ul">
          <li className="list-item">
            <AiFillHome className="icon" />
            <span className="listText">ホーム</span>
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
            <span className="listText">プロフィール</span>
          </li>

          <li className="list-item">
            <AiTwotoneSetting className="icon" />
            <span className="listText">設定</span>
          </li>
        </ul>
        <hr className="list-hr" />

        <ul className="ur2">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="img" />
            <span className="name">Hayate_T</span>
          </li>

          <li className="friend">
            <img src="/assets/person/3.jpeg" alt="" className="img" />
            <span className="name">Hayate_K</span>
          </li>

          <li className="friend">
            <img src="/assets/person/4.jpeg" alt="" className="img" />
            <span className="name">Hayate_H</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
