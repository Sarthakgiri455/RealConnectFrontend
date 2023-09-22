import React, {useState} from "react";
import { IconButton } from "@mui/material";
import ScreenShareIcon from '@mui/icons-material/ScreenShare' 
import StopScreenShare from '@mui/icons-material/StopScreenShare' 
import ScreenShare from "@mui/icons-material/ScreenShare";

const ScreenShareButton=()=>{
    const[screenShareEnabled, setScreenShareEnabled]= useState(false);

    const handleToggleScreenShare=()=>{
        setScreenShareEnabled(!screenShareEnabled);
    }
    return <IconButton onClick={handleToggleScreenShare} style={{color:'white'}}>
        {screenShareEnabled ? <ScreenShareIcon/>:<StopScreenShare/>}
    </IconButton>
}
export default ScreenShareButton;