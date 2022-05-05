import "./App.css";
import ContentPage from "./blocks/content-page/content-page";
import Header from "./blocks/header/header";
import React from "react";
import Main from "./blocks/main/main";
import {ErrorBoundary} from "./error-boundary/error-boundary";

function App () {
    return (
        <ErrorBoundary>
            <div className="App">
                <Header />
                <Main />
            </div>
        </ErrorBoundary>
    );
}

export default App;
