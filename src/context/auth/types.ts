export type User = {
  id: number;
  telegram_id: number;
  username: string;
  first_name: string;
  last_name: string;
  language_code: "ru" | "en";
};

export type AuthState = {
  loaded: boolean;
  isLoggedIn: boolean;
  user: User | null;
};

export type AuthAction =
  | { type: "LOGIN"; payload: { user: User } }
  | { type: "LOGOUT" }
  | { type: "UPDATE_USER"; payload: { user: User } };
