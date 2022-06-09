import { configureStore } from "@reduxjs/toolkit";
import searchValue from './searchSlice';

export const store = configureStore({
    reducer:{
        search:searchValue
    }
});