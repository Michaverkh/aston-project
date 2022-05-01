import React, {useCallback, useState} from "react";
import "./search.css"
import {debounce} from "../../utils/debounce";

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const debouncedQuery = useCallback(debounce(getQuery), [])

    const onChange = (e) => {
        setText(e.target.value)
        debouncedQuery(e.target.value)
    }

    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="type character's name"
                    value={text}
                    onChange={ onChange }
                    autoFocus
                />
            </form>
        </section>
    );
};

export default Search;