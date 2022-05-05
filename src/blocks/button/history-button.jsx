import React from "react";
import "./typical-button.css";
import {Link} from "react-router-dom";
import "../../styles/global-styles.css"
import {setQueryParam} from "../../toolkit-reducers/fetchingSlice";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

function HistoryButton (props) {

    const dispatch = useDispatch()

    return (
        <Link to='/' className="link">
            <button onClick = {() => dispatch(setQueryParam(props.query))} type={"button"} className="heart__button">
                {props.children}
            </button>
        </Link>
    );

}

HistoryButton.propTypes = {
    query: PropTypes.string
}

export default HistoryButton;