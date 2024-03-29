import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import userReducer from './userSlice';
const MyStore = configureStore({
    reducer: {
        user: userReducer,
    },
});
export default MyStore;