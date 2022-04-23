import React, {useState} from "react";
import "./character.css";
import HeartButton from "../button/heart-button";
import {useSelector} from "react-redux";

const Character = ({ item }) => {
    const isLogin = useSelector((state) => state.login.isLogin)
    const currentUser = useSelector(state => state.login.user.username);

    const addToFavorite = () => {
        const currentUserObject = JSON.parse(localStorage.getItem(currentUser));
        currentUserObject.favorites.push(item.char_id)
        localStorage.setItem(currentUser, JSON.stringify(currentUserObject));
    }

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                    {isLogin ? (
                        <HeartButton clickHandler={addToFavorite}>add to favorites</HeartButton>
                    ) : (<></>)}
                </div>
            </div>
        </div>
    )
}

export default Character
