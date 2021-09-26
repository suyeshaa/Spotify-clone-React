import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./Player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <Sidebar />
        {/* body */}
        <Body spotify={spotify} />
      </div>

      {/* footer */}
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
