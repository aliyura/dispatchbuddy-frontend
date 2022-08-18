import axios from "./axios";

// import queryString from "querystring"
export const login = async ({ grant_type, email, password }) => {
  // let _formData = new FormData();
  // _formData.append("grant-type", grant_type);
  // _formData.append("email",email);
  // _formData.append("quantity",password);

 // loadUser();  

  const params = new URLSearchParams();
  params.append("grant_type", grant_type);
  params.append("email", email);
  params.append("password", password);
  try {
    // const response = await axios.postForm(
      const basicAuth = 'Basic ' + window.btoa('web-client:password');
 
    // let headers = new HttpHeaders(
    //   {
    //     'Content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': basicAuth
    //   });
    const response = await axios.post(
      "/oauth/token",
      params,
      {
        headers: {
          'Authorization': basicAuth,
          "Content-type": "application/x-www-form-urlencoded",
          // accept: "application/x-www-form-urlencoded",
        },
        // auth: {
        //   username: "web-client",
        //   password: "password",
        // },
        // withCredentials: true,
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

export const validate = async ( username = "emma@gmail.com" ) => {
  console.log(username);
  try {
    const response = await axios.post(
      "api/user/validate",
      JSON.stringify({
        username
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

export const reset = async (username = "net.rabiualiyu@gmail.com", { password }) => {
  // console.log(username, password)
  try {
    const response = await axios.post(
      "api/user/password-reset",
      JSON.stringify({
        username,
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

