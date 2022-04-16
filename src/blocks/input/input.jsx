import React from "react";
import "./input.css";

function Input (props) {

    return (
        <input
            placeholder={props.placeholder}
            type={props.type}
        />
    );

}

export default Input;
