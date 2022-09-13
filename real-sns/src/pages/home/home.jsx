import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/sidebar';
import TimeLine from '../../components/timeline/timeline';
import Rightbar from '../../components/rightbar/rightbar';
import './home.css';

export default function home() {
  return (
    <>
      <Topbar />
      <div className="homeContent">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </div>
    </>
  );
}

// rfcで雛形作成
