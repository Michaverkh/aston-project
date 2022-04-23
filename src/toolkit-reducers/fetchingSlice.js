import {createSlice} from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
    name: "toolkit",
    initialState: {
        items: [],
        isFetching: true
    },
    reducers: {
        setCharacters(state, action) {
            state.items = action.payload;
            state.isFetching = false;
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload;
        }
    }
})

export default fetchingSlice.reducer
export const {setCharacters, setIsFetching} = fetchingSlice.actions