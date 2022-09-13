import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left-topbar">
        <span className="logo">Real SNS</span>
      </div>

      <div className="center-topbar">
        <div className="search-box">
          <BsSearch />
          <input
            type="text"
            className="search-input"
            placeholder="キーワード検索"
          />
        </div>
      </div>

      <div className="right-topbar">
        <div className="icon">1</div>
        <div className="icon">2</div>
      </div>

      <img src="/assets/person/1.jpeg" alt="" className="image" />
    </div>
  );
}
