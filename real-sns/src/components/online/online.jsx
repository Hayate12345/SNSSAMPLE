import React from 'react';

export default function online({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="friendList">
      <div className="imgContent">
        <img src={PUBLIC_FOLDER + user.profilePicture} alt="" />
        <span className="Online"></span>
      </div>

      <span className="userName">{user.username}</span>
    </li>
  );
}
