import { createContext, useReducer } from "react";
import layoutReducer from "./reducer";
import { LayoutState } from "./types";
import { LanguageCode } from "../../languages";

export const LayoutContext = createContext<{
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}>({
  language: LanguageCode.en,
  setLanguage: () => {},
});

const LayoutProvider = ({ children }: any) => {
  const initialState: LayoutState = {
    language: LanguageCode.en,
  };

  const [state, dispatch] = useReducer(layoutReducer, initialState);

  const setLanguage = (language: LanguageCode) => {
    dispatch({
      type: "SET_LANGUAGE",
      payload: { language },
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        language: state.language,
        setLanguage,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
