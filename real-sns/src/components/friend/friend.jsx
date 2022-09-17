import React from 'react';

export default function friend({ friend }) {
  // ファイルのパスを楽に使う
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="friend">
      <img src={PUBLIC_FOLDER + friend.profilePicture} alt="" className="img" />
      <span className="name">{friend.username}</span>
    </li>
  );
}
