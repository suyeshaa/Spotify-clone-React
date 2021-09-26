// what is happening is we are not tackling the authorization ourselves , spotify does it and when we click on login button it gets redirected to spotify authorization server and once spotify authorizes it , it gets redirected back to localhost:3000
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURL = "https://spotiifyy.netlify.app";

const clientId = "1763b24808034567b8b6a6ac6235bdfd";

//scopes basically tells us what all stuff we can do to our clone website
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// what this does is it extracts the access token from the url so that we can use it in app.js
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//through below step we are creating a url so that once we click on login btn we get redirected to the authorixation page
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
