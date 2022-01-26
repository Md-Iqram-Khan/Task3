import React, { createContext, useState } from "react";
import PlayRadio from "./components/PlayRadio/PlayRadio";
import Station from "./components/Station/Station";
import "./app.css";

export const RadioContext = createContext("radio");

function App() {
  const [play, setPlay] = useState("Radio Foorti");
  const handleClick = (e) => {
    const channelName = e.target.innerText;
    setPlay(channelName);
  };

  return (
    <RadioContext.Provider value={{ play: play, handleClick: handleClick }}>
      <div className="App">
        <div className="main">
          <Station />
          <PlayRadio play={play} />
        </div>
      </div>
    </RadioContext.Provider>
  );
}

export default App;
