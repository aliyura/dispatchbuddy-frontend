const setAuthToken = (token) => {
  localStorage.setItem("token", JSON.stringify({ token }));
};
export default setAuthToken