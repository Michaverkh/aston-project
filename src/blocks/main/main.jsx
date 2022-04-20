import React from 'react';
import ContentPage from "../content-page/content-page";
import { Routes, Route} from 'react-router-dom';
import "./main.css"
import FavoritesPage from "../favorites-page/favorites-page";
import HistoryPage from "../history-page/history-page";
import LogInPage from "../log-in-page/log-in-page";
import SignInPage from "../sign-in-page/sign-in-page";

const Main = () => {
    return (
        <div className={"main"}>
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='/favorites' element={<FavoritesPage/>}/>
                <Route path='/history' element={<HistoryPage/>}/>
                <Route path='/log-in' element={<LogInPage/>}/>
                <Route path='/sign-in' element={<SignInPage/>}/>
            </Routes>
        </div>
    );
};

export default Main;