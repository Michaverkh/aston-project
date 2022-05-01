import {createSlice} from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
    name: "toolkit",
    initialState: {
        items: [],
        isFetching: true,
        selectedCharacter: null,
        query: ""
    },
    reducers: {
        setCharacters(state, action) {
            state.items = action.payload;
            state.isFetching = false;
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        setCurrentCharacter(state, action) {
            state.selectedCharacter = action.payload
        },
        setQueryParam(state, action) {
            state.query = action.payload
        }
    }
})

export default fetchingSlice.reducer
export const {setCharacters, setIsFetching, setCurrentCharacter, setQueryParam} = fetchingSlice.actions