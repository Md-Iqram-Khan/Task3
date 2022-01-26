import React, { useState, useContext } from "react";
import "./singleChannel.css";
import Data from "../../Data/Data";
import { RadioContext } from "../../App";

const SingleChannel = () => {
  const [channel, setChannel] = useState(Data);
  const context = useContext(RadioContext);

  return (
    <div>
      {channel.map((i) => (
        <div key={i.frequency}>
          <div className="channel" onClick={context.handleClick}>
            <h2>{i.name}</h2>
            <h2>{i.frequency}</h2>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SingleChannel;
