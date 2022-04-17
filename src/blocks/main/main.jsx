import React, {useEffect} from "react";
import "./main.css";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../actions/api";

function Main () {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.items)

    useEffect(()=>{
        dispatch(getData())
    }, [])

    console.log(characters);

    return (
        <div className="main">
            <div className="content-wrapper">

            </div>
        </div>
    );

}

export default Main;
