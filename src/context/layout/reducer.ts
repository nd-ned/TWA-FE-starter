import { LayoutAction, LayoutState } from "./types";

const authReducer = (state: LayoutState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case "SET_LANGUAGE":
      localStorage.setItem("language", action.payload.language);

      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};

export default authReducer;
