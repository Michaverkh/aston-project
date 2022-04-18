import React, {useEffect, useState} from "react";
import "./content-page.css";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../actions/api";
import Characters from "../characters/characters";
import Search from "../search/search";

function ContentPage () {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.items)
    const isFetching = useSelector(state => state.characters.isFetching)
    const [query, setQuery] = useState('')

    useEffect(()=>{
        dispatch(getData(query))
    }, [query])

    console.log(query)

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
