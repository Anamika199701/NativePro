import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import userReducer from './CartSlice';
const MyStore = configureStore({
    reducer: {
        User: userReducer,
    },
});
export default MyStore;