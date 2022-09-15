import React from 'react';

export default function online({ user }) {
  return (
    <li className="friendList">
      <div className="imgContent">
        <img src={user.profilePicture} alt="" />
        <span className="Online"></span>
      </div>

      <span className="userName">{user.username}</span>
    </li>
  );
}
