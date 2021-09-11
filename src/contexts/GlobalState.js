import { createContext, useContext, useReducer } from "react";

const ctx = createContext();

export const useGlobal = () => useContext(ctx);

const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLISTS": {
      return {
        ...state,
        playlists: action.playlists,
      };
    }

    case "SET_DISCOVER_WEEKLY": {
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    }
    default: {
      return state;
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};
