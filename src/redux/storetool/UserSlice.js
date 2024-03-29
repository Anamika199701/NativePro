import {createSlice} from  '@reduxjs/toolkit'
const initialState = [];

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        addUser(state){
            state.push(action.payload)
        }
    },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;