import React, {useCallback, useState} from "react";
import "./search.css"
import {debounce} from "../../utils/debounce";

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    const handleChange = (e) => debounce(onChange(e.target.value));

    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="type character's name"
                    value={text}
                    onChange={handleChange}
                    autoFocus
                />
            </form>
        </section>
    );
};

export default Search;