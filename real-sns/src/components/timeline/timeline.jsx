import React from 'react';
import './timeline.css';
import Share from '../share/share';
import Post from '../post/post';

export default function timeline() {
  return (
    <div className="timeline">
      <div className="wrap">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
