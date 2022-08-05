import { createContext, useReducer } from "react";
import { tokenStatus, setAuthToken} from "../utils";
const { REACT_APP_AUTH_TOKEN } = process.env;

 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVVNFUiIsImdlbmRlciI6IkZlbWFsZSIsImNpdHkiOiJMZWtraSIsInVzZXJfbmFtZSI6Im5ldC5yYWJpdWFsaXl1QGdtYWlsLmNvbSIsImFjY291bnRUeXBlIjoiRElTUEFUQ0hFUiIsImRwIjoiZHA2NDA0OGYzNjA5OS5qcGciLCJ1dWlkIjoiNjQwNDhmMzYwOTkiLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImNsaWVudF9pZCI6IndlYi1jbGllbnQiLCJwaG9uZU51bWJlciI6IjA4MDY0MTYwMjA0Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImlzRW5hYmxlZCI6dHJ1ZSwibmFtZSI6IkVtbWFudWVsIEFsYWtlciIsImlkIjoiNjJkYTYxOTE0YTBhZDQwZGU3NzU0NDU0IiwianRpIjoiYjhlMmFkMzgtNzk5OS00OGZhLWJjYTMtMmY4NWEzNzNmNGNhIiwiZW1haWwiOiJuZXQucmFiaXVhbGl5dUBnbWFpbC5jb20iLCJzdGF0dXMiOiJBQyJ9.-xwURl1XPW9vSsAfjCucvMeWWkw6YUShchTmin_n3ys";

export const loadUser = (token) => {
  console.log(token)
  const decoded = tokenStatus(token);

  if (decoded) {
      setAuthToken(token); 
  }
  console.log(decoded)
  return {
    username: decoded["user_name"],
    isAuthenticated: true,
    loading: false,
    error: null,
  };
};


const initialState = {
  username: "",
  isAuthenticated: false,
  loading: false,
  error: null,
  loggingIn: false,
  token: null,
  loginError: null,
};
const AppReducer = (state, action) => {
  switch (action.type) {
    // USER
    case "LOAD_USER":
      return { ...state, ...(loadUser(token)) };
    case "LOGIN_START":
      return { ...state, loggingIn: true };
    case "LOGIN_SUCCESS":
      setAuthToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVVNFUiIsImdlbmRlciI6IkZlbWFsZSIsImNpdHkiOiJMZWtraSIsInVzZXJfbmFtZSI6Im5ldC5yYWJpdWFsaXl1QGdtYWlsLmNvbSIsImFjY291bnRUeXBlIjoiRElTUEFUQ0hFUiIsImRwIjoiZHA2NDA0OGYzNjA5OS5qcGciLCJ1dWlkIjoiNjQwNDhmMzYwOTkiLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImNsaWVudF9pZCI6IndlYi1jbGllbnQiLCJwaG9uZU51bWJlciI6IjA4MDY0MTYwMjA0Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImlzRW5hYmxlZCI6dHJ1ZSwibmFtZSI6IkVtbWFudWVsIEFsYWtlciIsImlkIjoiNjJkYTYxOTE0YTBhZDQwZGU3NzU0NDU0IiwianRpIjoiMzJlY2Q4MzAtNTkwNC00ZjU5LWIxMzItYzE5MjRhNGY4MDgzIiwiZW1haWwiOiJuZXQucmFiaXVhbGl5dUBnbWFpbC5jb20iLCJzdGF0dXMiOiJBQyJ9.AIuLkfLArBTJ44AJLVTs84hHlylHOhrPR9-UJvh1mlg"
      );
      return { ...state,loggingIn: false, token: action.payload };
    case "LOGIN_FAILURE":
      return { ...state,loggingIn: false, loginError: action.payload };
    case "LOGOUT":
      localStorage.removeItem(REACT_APP_AUTH_TOKEN);
      localStorage.removeItem("user");
      return {
        username: "",
        isAuthenticated: false,
        loading: false,
        error: null,
        loggingIn: false,
        token: null,
        loginError: null,
      };

    // DELIVERIES

    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AuthContext.Provider
      value={[state, dispatch]}
    >
      {console.log(state)}
      {children}
    </AuthContext.Provider>
  );
};

