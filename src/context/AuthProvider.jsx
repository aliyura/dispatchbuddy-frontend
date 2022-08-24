import { createContext, useReducer } from "react";
import { tokenStatus, setAuthToken } from "../utils";
const { REACT_APP_AUTH_TOKEN } = process.env;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVVNFUiIsImdlbmRlciI6Ik1hbGUiLCJjaXR5IjoiQWJ1amEiLCJ1c2VyX25hbWUiOiJuZXQucmFiaXVhbGl5dUBnbWFpbC5jb20iLCJhY2NvdW50VHlwZSI6IkRJU1BBVENIRVIiLCJkcCI6ImRwNjQwNDhmMzYwOTkuanBnIiwidXVpZCI6IjY0MDQ4ZjM2MDk5IiwiYXV0aG9yaXRpZXMiOlsiVVNFUiJdLCJjbGllbnRfaWQiOiJ3ZWItY2xpZW50IiwicGhvbmVOdW1iZXIiOiIwODA2NDE2MDIwNCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJpc0VuYWJsZWQiOnRydWUsIm5hbWUiOiJSYWJpdSBBbGl5dSIsImlkIjoiNjJkYTYxOTE0YTBhZDQwZGU3NzU0NDU0IiwianRpIjoiNDQ4NmU4MDEtMzNmYy00ODFkLWI3MmQtOGVmMjJjYWRhZGYxIiwiZW1haWwiOiJuZXQucmFiaXVhbGl5dUBnbWFpbC5jb20iLCJzdGF0dXMiOiJBQyJ9._-T8leEXhKsUhZrSlA10nSFoUKD0Cjoz9PVnjsaxiNI";
//  const token = "";

export const loadUser = (token) => {
  console.log(token);
  const decoded = tokenStatus(token);

  if (decoded) {
    setAuthToken(token);
  }
  console.log(decoded);
  return {
    username: decoded?.email,
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
  logginError: null,
  signupError: null,
  loadingDeliveries: false,
  loadingDeliveriesError: null,
  deliveries: [],
};
const AppReducer = (state, action) => {
  switch (action.type) {
    // USER
    case "SIGNUP_SUCCESS":
      return { ...state, username: action.payload };
    case "SIGNUP_FAILURE":
      return { ...state, signupError: action.payload };
    case "LOAD_USER":
      return { ...state, ...loadUser(token) };
    case "LOGIN_START":
      return { ...state, loggingIn: true };
    case "LOGIN_SUCCESS":
      setAuthToken(token);
      return { ...state, loggingIn: false, token: action.payload };
    case "FORGOT_PASSWORD_SUCCESS":
      return { ...state, username: action.payload };
    case "LOGIN_FAILURE":
      return { ...state, loggingIn: false, logginError: action.payload };
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
        logginError: null,
      };

    // DELIVERIES
    case "GET_DELIVERIES_START":
      return {
        ...state,
        loadingDeliveries: true,
      };
    case "GET_DELIVERIES_SUCCESS":
      return {
        ...state,
        loadingDeliveries: false,
        loadingDeliveriesError: null,
        deliveries: action.payload,
      };
    case "GET_DELIVERIES_ERROR":
      return {
        ...state,
        loadingDeliveries: false,
        loadingDeliveriesError: action.payload,
      };
    
    // SELECT RIDER
    case "GET_RIDER_START":
      return {
        ...state,
        loadingRider: true,
      };
    case "GET_RIDER_SUCCESS":
      return {
        ...state,
        loadingRider: false,
        loadingRiderError: null,
        rider: action.payload,
      };
    case "GET_RIDER_ERROR":
      return {
        ...state,
        loadingRider: false,
        loadingRiderError: action.payload,
      };
    
      default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {console.log(state)}
      {children}
    </AuthContext.Provider>
  );
};
