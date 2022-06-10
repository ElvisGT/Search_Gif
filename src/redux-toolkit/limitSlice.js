import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:10
};

const limitSlice = createSlice({
    name:'limit',
    initialState,
    reducers:{
        addMore:((state) => {
            state.value += 10
        }),

        resetLimit:((state) => {
            state.value = 10
        })
    }
})

export default limitSlice.reducer;
export const {addMore,resetLimit} = limitSlice.actions;