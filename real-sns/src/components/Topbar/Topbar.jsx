import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiMessage2Fill } from 'react-icons/ri';
import { AiFillBell } from 'react-icons/ai';
import './Topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left-topbar">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <span className="logo">Real SNS</span>
        </Link>
      </div>

      <div className="center-topbar">
        <div className="search-box">
          <BsSearch className="icon1" />
          <input
            type="text"
            className="search-input"
            placeholder="キーワード検索"
          />
        </div>
      </div>

      <div className="right-topbar">
        <div className="icon">
          <RiMessage2Fill />
          <span className="icon-span">1</span>
        </div>
        <div className="icon">
          <AiFillBell />
          <span className="icon-span">2</span>
        </div>

        <img src="/assets/person/1.jpeg" alt="" className="image" />
      </div>
    </div>
  );
}
