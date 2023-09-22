import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./mainpagebutton";
import CreateRoomButton from "./createroombutton"

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = () => {
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton/>
    </MainContainer>
  );
};

export default SideBar;
