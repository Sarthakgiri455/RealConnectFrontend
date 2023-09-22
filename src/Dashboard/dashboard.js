import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/sidebar";
import FriendsSideBar from "./FriendsSideBar/friendssidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  const navigate= useNavigate(); 
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};
const mapActionsToProps = (dispatch) => {

  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(Dashboard);
