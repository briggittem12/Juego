import { configureStore } from '@reduxjs/toolkit';
import { userNameSlice } from './playerSlice';

export const store = configureStore({
    reducer: {
        userName: userNameSlice.reducer
    }
})