import { USER_LOGOUT, USER_LOG_IN } from "./constants";

export function userLogin(item){
    return{
        type: USER_LOG_IN,
        data: item,
    }   
}

export function userLogout(item){
    return{
        type: USER_LOGOUT,
        data: item,
    }   
}