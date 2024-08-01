import { createContext, useReducer } from "react";
import authReducer from "./reducer";
import { AuthState, User } from "./types";

export const AuthContext = createContext<{
  loaded: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: User) => void;
}>({
  loaded: false,
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});

const AuthProvider = ({ children }: any) => {
  const initialState: AuthState = {
    loaded: false,
    isLoggedIn: false,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user: User) => {
    console.log("executing login", user);

    dispatch({
      type: "LOGIN",
      payload: { user },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const updateUser = (user: User) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { user },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        loaded: state.loaded,
        user: state.user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
