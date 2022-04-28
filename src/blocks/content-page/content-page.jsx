import React, {useEffect, useState} from "react";
import "./content-page.css";
import {useDispatch, useSelector} from "react-redux";
import {getCharacters, getCharactersDebounced} from "../../actions/api";
import Characters from "../characters/characters";
import Search from "../search/search";
import {addHistoryItem} from "../../actions/add-history-item";

function ContentPage () {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.toolkit.items)
    const isFetching = useSelector(state => state.toolkit.isFetching)
    const currentUser = useSelector(state => state.login.user)

    const [query, setQuery] = useState('')

    useEffect(()=>{
        dispatch(getCharacters(query))
        if (currentUser) {
            addHistoryItem(currentUser.username, query)
        }
    }, [query])

    return (
        <div>
            <div className="content-wrapper">
                <Search getQuery={(q) => setQuery(q)}/>
                <Characters characters={characters} isFetching={isFetching}/>
            </div>
        </div>
    );

}

export default ContentPage;
