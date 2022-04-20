import React from "react";
import "./characters.css"
import Character from "../character/character";

const Characters = ({ characters, isFetching}) => {
    return isFetching ? <h2 className={"loading"}>Loading...</h2> : <div className={"cards"}>
        {characters.map(item => (
            <Character key={item.char_id} item={item}></Character>
        ))}
        </div>
};

export default Characters;