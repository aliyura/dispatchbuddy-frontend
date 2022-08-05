import axios from "./axios";
import { setAuthToken } from "../utils";
// const { REACT_APP_AUTH_TOKEN } = process.env;

// import queryString from "querystring"
export const login = async ({ grant_type, email, password }) => {
  // let _formData = new FormData();
  // _formData.append("grant-type", grant_type);
  // _formData.append("email",email);
  // _formData.append("quantity",password);

 // loadUser();  

  const params = new URLSearchParams();
  params.append("grant-type", grant_type);
  params.append("email", email);
  params.append("password", password);
  // axios.post("/foo", params);
  try {
    // const response = await axios.postForm(
    const response = await axios.post(
      "/oauth/token",
      params,
      // {
      //   grant_type: grant_type,
      //   username: email,
      //   password,
      // },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/x-www-form-urlencoded",
        },
        auth: {
          username: "web-client",
          password: "password",
        },
        withCredentials: true,
      }
    );
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

// export const setCookie = (name, value, days, path = "/") => {
//   let expires = "";
//   if (days) {
//     let date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = `; expires=${date.toUTCString()};`;
//   }
//   document.cookie = `${name}=${value}${expires}; path=${path}`;
// };



export const getAuthToken = () => {
  return localStorage.getItem("token");
};
export const signup = async ({
  email,
  password,
  phoneNumber,
  dateOfBirth = "02/01/96",
}) => {
  try {
    const response = await axios.post(
      "api/user/signup",
      JSON.stringify({
        email,
        password,
        phoneNumber,
        dateOfBirth,
        authProvider: "EMAIL",
      }),
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const verify = async ({ email = "emma@gmail.com", otp }) => {
  try {
    const response = await axios.post(
      "api/user/verify",
      JSON.stringify({
        username: email,
        otp,
      }),
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const validate = async ({ email = "emma@gmail.com" }) => {
  try {
    const response = await axios.post(
      "api/user/validate",
      JSON.stringify({
        username: email,
      }),
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const reset = async ({ email = "net.rabiualiyu@gmail.com", password }) => {
  try {
    const response = await axios.post(
      "api/user/password-reset",
      JSON.stringify({
        username: email,
        password,
      }),
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

