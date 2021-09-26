import React, { useEffect } from "react";
import "./Footer.css";

//icons
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { useGlobal } from "../contexts/GlobalState";

const Footer = ({ spotify }) => {
  // const { state, dispatch } = useGlobal();

  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     console.log(r);

  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: r.is_playing,
  //     });

  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // }, [spotify]);

  // const clickHandler = () => {
  //   console.log("h");
  //   if (state.playing) {
  //     spotify.pause();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: false,
  //     });
  //   } else {
  //     spotify.play();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   }
  // };

  return (
    <div className="footer">
      {/* left-side */}
      <div className="footer__left">
        <img classname="footer__albumLogo" src=" " alt="song-img" />
        <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
      </div>

      {/* center */}
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />

        {/* {state.playing ? (
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer__icon"
            onCLick={clickHandler}
          />
        ) : (
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer__icon"
            onCLick={clickHandler}
          />
        )} */}

        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      {/* right side */}
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
