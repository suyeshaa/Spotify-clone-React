import { createContext, useContext, useReducer } from "react";

const ctx = createContext();

export const useGlobal = () => useContext(ctx);

const initialState = {
  user: null,
  playlists: [],
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
