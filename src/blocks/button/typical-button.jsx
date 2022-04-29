import React from "react";
import "./typical-button.css";

function TypicalButton (props) {

    return (
        <button onClick = {props.clickHandler} type={"button"} className="heart__button">
            {props.children}
        </button>
    );

}

export default TypicalButton;
