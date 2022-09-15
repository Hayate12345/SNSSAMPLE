import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/Topbar/Topbar';
import TimeLine from '../../components/timeline/timeline';
import Rightbar from '../../components/rightbar/rightbar';
import './profile.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="./assets/person/2.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="./assets/person/1.jpeg"
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
            <TimeLine />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
}
