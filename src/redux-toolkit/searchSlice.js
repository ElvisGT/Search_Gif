import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:null
};

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearch:((state,action) => {
            state.value = action.payload
        }),

        resetSearch:((state) => {
            state.value = null
        })
    }
});

export const {setSearch,resetSearch} = searchSlice.actions;
export default searchSlice.reducer;