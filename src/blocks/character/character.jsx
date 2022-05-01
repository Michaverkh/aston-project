import React, {useState} from "react";
import "./character.css";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import TypicalButton from "../button/typical-button";
import {Link} from "react-router-dom";
import "../../styles/global-styles.css"
import {setCurrentCharacter} from "../../toolkit-reducers/fetchingSlice";

const Character = ({ item, mainContentPage}) => {
    const isLogin = useSelector((state) => state.login.isLogin)
    const currentUser = useSelector(state => state.login.user);
    const dispatch = useDispatch()

    const addToFavorite = () => {
        if (currentUser) {
            const currentUserObject = JSON.parse(localStorage.getItem(currentUser.username));
            currentUserObject.favorites.push(item.char_id)
            localStorage.setItem(currentUser.username, JSON.stringify(currentUserObject));
        }
    }

    const removeFromFavorite = () => {
        if (currentUser) {
            const currentUserObject = JSON.parse(localStorage.getItem(currentUser.username));
            const favorites = currentUserObject.favorites
            const correctedFavorites = favorites.filter(favorite => favorite !== item.char_id)
            currentUserObject.favorites = correctedFavorites
            localStorage.setItem(currentUser.username, JSON.stringify(currentUserObject));
        }
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
                    <div className='card__buttons-wrapper'>
                        {isLogin &&
                            mainContentPage ? (
                                    <TypicalButton clickHandler={addToFavorite}>add to favorites</TypicalButton>
                                ) : (
                                    <TypicalButton clickHandler={removeFromFavorite}>remove from favorites</TypicalButton>
                                )
                        }
                        <Link to='/show-more' className='link'>
                            <TypicalButton clickHandler={() => dispatch(setCurrentCharacter(item))}>show more</TypicalButton>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Character
