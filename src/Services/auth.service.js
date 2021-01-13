import axios from 'axios';

const API_URL = "http://localhost:3000/";

const register = (username, email, password) => {
    // console.log(username);
    // console.log(email);
    // console.log(password);
    
    return axios.post(API_URL + 'Signup', {
      username,
      email,
      password,
    });
  };
  
  const login = (username, password) => {
    return axios
      .post(API_URL + "Signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };