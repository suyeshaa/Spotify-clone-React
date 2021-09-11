import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const Banner = () => {
  const { state } = useGlobal();
  return (
    <div className="body__info">
      <img src={state.discover_weekly?.images[0].url} alt="" />
      <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{state?.discover_weekly?.description}</p>
      </div>
    </div>
  );
};

export default Banner;
