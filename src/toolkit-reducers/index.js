import {combineReducers, configureStore} from "@reduxjs/toolkit";
import fetchingSlice from "./fetchingSlice";
import loginSlice from "./loginSlice";

const rootReducer = combineReducers({
    toolkit: fetchingSlice,
    login: loginSlice
})

export const store = configureStore({
    reducer: rootReducer
})