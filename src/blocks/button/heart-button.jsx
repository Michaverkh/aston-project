import React from "react";
import "./heart-button.css";
import HeartTwoTone from "@ant-design/icons/lib/icons/HeartTwoTone";

function HeartButton (props) {

    return (
        <button onClick = {props.clickHandler} type={"button"} className="heart__button">
            {props.children}
        </button>
    );

}

export default HeartButton;
