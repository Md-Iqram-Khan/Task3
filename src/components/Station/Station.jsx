import React from "react";
import "./station.css";

import SingleChannel from "../SingleChannel/SingleChannel";
import ChannelHead from "../ChannelHead/ChannelHead";

// handleClick = { handleClick };

const Station = ({ handleClick }) => {
  return (
    <div className="stationList">
      <ChannelHead />
      <SingleChannel />
    </div>
  );
};

export default Station;
