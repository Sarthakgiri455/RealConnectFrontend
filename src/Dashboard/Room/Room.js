import React, {useState} from 'react';
import {styled} from '@mui/system';
import ResizeRoomButton from "./ResizeRoomButton"
import VideosContainer from './VideosContainer';
import RoomButtons from './RoomButtons/RoomButton';

const MainContainer=styled('div')({
    position:'absolute',
    borderRadius:'8px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#202225'
})
const fullScreenRoomStyle={
    width:'100%',
    height:'100vh',



}
const minimizedRoomStyle={
    bottom:'0px',
    right:'0px',
    width:'30%',
    height:'40vh',
}
const Room=()=>{
    const[isRoomMinimized, setIsRoomMinimized]=useState(true);
    const roomResizeHandler=()=>{
        setIsRoomMinimized(!isRoomMinimized);
    }
    return <MainContainer style={isRoomMinimized?minimizedRoomStyle:fullScreenRoomStyle}>
    <ResizeRoomButton isRoomMinimized={isRoomMinimized} handleresize={roomResizeHandler}>
      

      
      
    </ResizeRoomButton>
    <VideosContainer/>
       <RoomButtons/>

    </MainContainer>

}
export default Room;