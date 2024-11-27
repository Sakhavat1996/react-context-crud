import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext({
  theme: false,
  changeMode: () => {},
  state: [],
  dispatch: () => {},
});

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          value: action.payload.value,
          id: action.payload.id,
        },
      ];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, value: action.payload.value}
          : item
      );
    default:
      return state;
  }
};

export default function ThemeContextProvider({ children }) {
  const [themeColor, setThemeColor] = useState(false);
  const [state, dispatch] = useReducer(reducerFunction, []);
  const changeMode = () => {
    setThemeColor(!themeColor);
  };

  const contextValue = {
    theme: themeColor,
    state,
    dispatch,
    changeMode,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
