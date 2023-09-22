import { roomActions } from "../actions/roomActions";


const initState={
    isUserInRoom:false,
    isUserRoomCreator:false,
    roomDetails:[], //setting the room details 
    activeRooms:[], //knowing the active rooms to which we can join received from the server
    localStream:null, //stream from camera/audio knowing the streams
    remoteStreams:[] ,//knowing the streaming from other users
    audioOnly:false,
    screenSharingStream:null,
    isScreenSharingActive:false

}
const reducer = (state=initState, action)=>{
    switch(action.type){
        case roomActions.OPEN_ROOM:
            return{
                ...state, 
                isUserInRoom:action.isUserInRoom,
                isUserRoomCreator:action.isUserRoomCreator
            }
        default:
            return state;
    }

}
export default reducer;