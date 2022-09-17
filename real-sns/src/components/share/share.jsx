import React from 'react';
import './share.css';
import { AiFillPicture, AiOutlineGif } from 'react-icons/ai';

import { MdFace } from 'react-icons/md';

import { GoGraph } from 'react-icons/go';

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="warp">
        <div className="shareTop">
          <img
            src={PUBLIC_FOLDER + '/person/noAvatar.png'}
            alt=""
            className="img"
          />
          <input type="text" className="input" placeholder="今、どうしてる？" />
        </div>
        <hr />

        <div className="shareButton">
          <div className="options">
            <div className="option">
              <AiFillPicture
                color="red
              "
                className="icon"
              />
              <span className="text">写真</span>
            </div>

            <div className="option">
              <AiOutlineGif className="icon" />
              <span className="text">GIF</span>
            </div>

            <div className="option">
              <MdFace className="icon" />
              <span className="text">気持ち</span>
            </div>

            <div className="option">
              <GoGraph className="icon" />
              <span className="text">投票</span>
            </div>
          </div>

          <button type="submit">投稿</button>
        </div>
      </div>
    </div>
  );
}
