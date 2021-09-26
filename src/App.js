import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useGlobal } from "./contexts/GlobalState";

const spotify = new SpotifyWebApi(); //creates an instance of spotifywebapi inside our app which allows us to communicate with spotify

function App() {
  const { dispatch } = useGlobal();

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = ""; //we are doing this because we dont want our access token to be visible in the url

    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      setToken(_token);

      //i guess below steps are to tell spotify that im authorized (through setAccessToken) and throught getMe it tells spotify to pull up my account
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
        console.log(token);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // dispatch({
      //   type: "SET_SPOTIFY",
      //   spotify: spotify,
      // });

      spotify.getPlaylist("37i9dQZEVXcTnAKb1OGSIY").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
