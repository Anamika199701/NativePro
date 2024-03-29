import {createSlice} from  '@reduxjs/toolkit'
const initialState = [];

const cartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addCartItem(state,action){
            state.push(action.payload)
        },
        removeCartItem(state,action){
            return state.filter((item,index) => index != action.payload);
        },
    },
});

export const {addCartItem,removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;