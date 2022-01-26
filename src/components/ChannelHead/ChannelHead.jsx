/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./channelHead.css";
import BackArrow from "../../images/back-arrow.png";
import switchs from "../../images/switch.png";

const ChannelHead = () => {
  return (
    <div className="head">
      <a href="#">
        <img className="img1" src={BackArrow} alt="BackArrow" />
      </a>
      <h2 className="headText">Stations</h2>
      <a href="#">
        <img className="img2" src={switchs} alt="Switch" />
      </a>
    </div>
  );
};

export default ChannelHead;
