import React, {useEffect, useState} from "react";
import "./content-page.css";
import {useDispatch, useSelector} from "react-redux";
import {getCharacters} from "../../actions/api";
import Characters from "../characters/characters";
import Search from "../search/search";

function ContentPage () {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.toolkit.items)
    const isFetching = useSelector(state => state.toolkit.isFetching)
    const [query, setQuery] = useState('')

    useEffect(()=>{
        dispatch(getCharacters(query))
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
