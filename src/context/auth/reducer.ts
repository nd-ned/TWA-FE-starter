import { AuthAction, AuthState } from "./types"

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loaded: true,
        isLoggedIn: true,
        user: action.payload.user,
      }
    case "LOGOUT":
      return {
        ...state,
        loaded: true,
        isLoggedIn: false,
        user: null,
      }
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}

export default authReducer
