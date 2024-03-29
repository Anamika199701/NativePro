import { USER_LOGOUT, USER_LOG_IN } from "./constants";
 const initialState = {
    isActive:true
 };

 export const reducer = (state=initialState,action)=>{
    console.log("reducer",action);
    switch(action.type){
        case USER_LOG_IN:
            return {
                ...state,
                isActive: action.data  // Update isActive with action data value
            };
        case USER_LOGOUT:
            return {
                ...state,
                isActive: action.data
            }
        default:
            return state;
    }
 }