import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {store, persistor} from "./toolkit-reducers/index";
import { BrowserRouter } from 'react-router-dom'
import TestContext from "./context/context";
import { PersistGate } from 'redux-persist/integration/react'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <TestContext.Provider value={'test-data'}>
                        <App />
                    </TestContext.Provider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
