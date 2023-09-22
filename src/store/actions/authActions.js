import * as api from "../../api";
import { openAlertMessage } from "./alertActions";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};
export const getActions = (dispatch, navigate) => {
//   const navigate = useNavigate(); // Use the useNavigate hook
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};
const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};
const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard"); // Use the navigate function for navigation
    }
  };
};
const register = (userDetails, navigate) => {
  return async (dispatch) => {   
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard"); // Use the navigate function for navigation
    }
  };
};
