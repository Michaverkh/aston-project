import React from 'react';
import "./favorites-page.css"
import Characters from "../characters/characters";
import {useSelector} from "react-redux";

const FavoritesPage = () => {
    const currentUser = useSelector(state => state.login.user.username);
    const favoriteItems = JSON.parse(localStorage.getItem(currentUser)).favorites;
    const allCharacters = useSelector(state => state.toolkit.items);
    const isFavoritesChanged = useSelector(state => state.login.isFavoritesChanged)
    const isLogin = useSelector((state) => state.login.isLogin)

    const filtredCharacters = allCharacters.filter(character => favoriteItems.includes(character.char_id));

    return (
        <div className={"favorites-page"}>
            <h2>Favorites</h2>
            <Characters characters={filtredCharacters} isFetching={false}/>
        </div>
    );
};

export default FavoritesPage;