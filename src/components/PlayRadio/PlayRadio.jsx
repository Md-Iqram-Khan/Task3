/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import ChannelHead from "../ChannelHead/ChannelHead";
import "./playRadio.css";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import music from "../../images/music.png";
import { RadioContext } from "../../App";

const PlayRadio = () => {
  const context = useContext(RadioContext);
  return (
    <div className="playSection">
      <ChannelHead />
      <div className="channelBody">
        <h2 style={{ color: "black", textAlign: "center", padding: "5px" }}>
          {context.play}
        </h2>
        <hr />
        <div className="btnArea">
          <a href="#">
            <img className="musicImg1" src={minus} alt="minus" />
          </a>
          <img className="musicImg2" src={music} alt="minus" />
          <a href="#">
            <img className="musicImg3" src={plus} alt="plus" />
          </a>
        </div>
        <hr />
        <div className="footer">
          <h4 className="footerText">Currenlty Playing</h4>
          <h2>{context.play}</h2>
        </div>
      </div>
    </div>
  );
};

export default PlayRadio;
