import {combineReducers, createStore, applyMiddleware} from "redux";
import apiReducer from "./apiReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    characters: apiReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))