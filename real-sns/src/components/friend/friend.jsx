import React from 'react';

export default function friend({ friend }) {
  return (
    <li className="friend">
      <img src={friend.profilePicture} alt="" className="img" />
      <span className="name">{friend.username}</span>
    </li>
  );
}
