import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useGlobal } from "../contexts/GlobalState";
import Banner from "./Banner";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const { state } = useGlobal();

  return (
    <div className="body">
      <Header spotify={spotify} />

      {/* banner */}
      <Banner />

      {/* songs-list */}
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {/* list */}
        {state?.discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
