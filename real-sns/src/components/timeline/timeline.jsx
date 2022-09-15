import React from 'react';
import './timeline.css';
import Share from '../share/share';
import Post from '../post/post';
import { Posts } from '../../date';

export default function timeline() {
  return (
    <div className="timeline">
      <div className="wrap">
        <Share />
        {/* map関数で値を一つ一つ取り出す */}
        {Posts.map((post) => (
          // Keyをつけないとエラー　重複しないようにPostのIDを振っている
          <Post postDate={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
