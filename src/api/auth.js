import axios from "./axios";
const { REACT_APP_AUTH_TOKEN } = process.env;

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

export const updateProfile = async(username, country, city, gender, dob) => {
  try {
//     const response = await axios.post(
//       "api/user/update",
//       JSON.stringify({
//         name: username,
//         country,
//         city,
//         gender,
//         dateOfBirth: dob,
//       }),
//       {
//         headers: { "Content-type": "application/json",
//         Authorization: `${JSON.parse(localStorage.getItem(REACT_APP_AUTH_TOKEN))?.token}`
//       },
// }
//     );
    // console.log(response, 'from updateProfile Call backend ...');
    let response = {
      data: {
      "message": "Request Successful",
      "success": true,
      "payload": {
          "id": "62da61914a0ad40de7754454",
          "name": "Rabiu Deyems",
          "uuid": "64048f36099",
          "email": "net.rabiualiyu@gmail.com",
          "password": "$2a$10$1urNhtYII0LixhJR0OVr1ur77eE7iB8gbPqAEAfpfOF0B19KzmEXa",
          "phoneNumber": "08064160204",
          "gender": "Male",
          "city": "Lagos",
          "country": "Kenya",
          "dp": "dp64048f36099.jpg",
          "dateOfBirth": "02/04/1994",
          "thirdPartyToken": null,
          "isEnabled": true,
          "authProvider": "EMAIL",
          "accountType": "DISPATCHER",
          "status": "AC",
          "role": "USER",
          "coveredLocations": [
              "Somehwere",
              "Itedo",
              "Ikeja",
              "Ajah",
              "Ikorodu",
              "Iyana Ikpaja",
              "Ikotun",
              "Iyana Ipaja",
              "Ikoyi",
              "Idimu",
              "Victoria Island",
              "Lekki",
              "[LOCALITY, POLITICAL, GEOCODE]",
              "[ADMINISTRATIVE_AREA_LEVEL_3, POLITICAL, GEOCODE]",
              "Ajah/Sangotedo"
          ],
          "createdDate": "2022-07-22T08:36:33.094+00:00",
          "updatedDate": "2022-08-19T15:28:20.966+00:00",
          "lastLoginDate": "2022-07-22T08:36:33.094+00:00",
          "lastModifiedDate": "2022-08-19T15:28:20.966+00:00"
      }
    }
  }
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    console.log(err, 'at update route...');
    return {
      data: null,
      error: err,
    };
  }
}