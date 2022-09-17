import React, { useEffect, useState } from 'react';
import './timeline.css';
import Share from '../share/share';
import Post from '../post/post';
import axios from 'axios';

export default function Timeline({ username }) {
  // Dbから取得した情報を格納する変数
  const [posts, setPosts] = useState([]);

  // リロード時にDBから一度だけ情報を取得する
  useEffect(() => {
    // 非同期処理のためasyncとawait必要
    const async = async () => {
      // timelineはgetメソッドで取得できたよね
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(
            // エンドポイントを指定して取得する
            '/posts/timeline/631d8570364420147e429b59'
          );
      // console.log(response);
      // 変数に格納 .data必要
      setPosts(response.data);
    };
    async();
  }, []);

  return (
    <div className="timeline">
      <div className="wrap">
        <Share />
        {/* map関数で値を一つ一つ取り出す */}
        {posts.map((post) => (
          // Keyをつけないとエラー　重複しないようにPostのIDを振っている MongoDBは_id
          <Post postDate={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
