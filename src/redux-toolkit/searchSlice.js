import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:"Edgar"
};

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{}
});

export default searchSlice.reducer;