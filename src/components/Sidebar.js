import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useGlobal } from "../contexts/GlobalState";

const Sidebar = () => {
  const { state } = useGlobal();
  console.log(state);

  // saying -> if playlists exist then render sidebar otherwise dont do anything
  const list = (state.playlists.items || []).map((itm, idx) => (
    <SidebarOption title={itm.name} key={idx} />
  ));

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Playlists" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />

      <strong className="sidebar__title"> PLAYLISTS</strong>
      <hr />

      {list}
    </div>
  );
};

export default Sidebar;
