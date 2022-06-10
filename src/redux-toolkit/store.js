import { configureStore } from "@reduxjs/toolkit";
import searchValue from './searchSlice';
import limitValue from './limitSlice';

export const store = configureStore({
    reducer:{
        search:searchValue,
        limit:limitValue
    }
});