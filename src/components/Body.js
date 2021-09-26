import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useGlobal } from "../contexts/GlobalState";
import Banner from "./Banner";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const { state, dispatch } = useGlobal();

  // const playPlaylist = (id) => {
  //   spotify
  //     .play({
  //       context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  // const playSong = (id) => {
  //   spotify
  //     .play({
  //       uris: [`spotify:track:${id}`],
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

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
