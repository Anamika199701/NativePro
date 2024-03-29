import {createSlice} from  '@reduxjs/toolkit'
const initialState = [];
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser(state,action){
          return { ...state, isActive: true };
        },
        logOutUser(state,action){
            return { ...state, isActive: false };
          }
    },
});

export const {addUser,logOutUser} = userSlice.actions;
export default userSlice.reducer;