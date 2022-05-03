import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import fetchingSlice from "./fetchingSlice";
import loginSlice from "./loginSlice";
import {characterApi} from "../actions/api-request";
import {loggerMiddleware} from "../middleware/middleware";

const rootReducer = combineReducers({
    toolkit: fetchingSlice,
    login: loginSlice,
    [characterApi.reducerPath]: characterApi.reducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(characterApi.middleware, loggerMiddleware),
})

export const persistor = persistStore(store)