import React from 'react';
import {styled} from '@mui/system'
import { IconButton } from '@mui/material';
// import IconBmpoutton from '@mui/material/IconButton';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const MainContainer= styled('div')({
    position:'absolute',
    bottom:'10px',
    right:'10px',
})

const ResizeRoomButton=({isRoomMinimized, handleresize})=>{

    return <MainContainer>
        <IconButton style={{color:'white'}} onClick={handleresize}>
        {isRoomMinimized ?<OpenInFullIcon/>:<CloseFullscreenIcon/>}
        </IconButton>
    </MainContainer>

}
export default ResizeRoomButton