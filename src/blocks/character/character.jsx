import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./character.css";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import TypicalButton from "../button/typical-button";
import {Link} from "react-router-dom";
import "../../styles/global-styles.css"
import {setCurrentCharacter} from "../../toolkit-reducers/fetchingSlice";
import {changeFavoritesList} from "../../toolkit-reducers/loginSlice";
import {useTougle} from "../../hooks/use-tougle";

const Character = ({ item, mainContentPage}) => {
    const isLogin = useSelector((state) => state.login.isLogin)
    const currentUser = useSelector(state => state.login.user);
    const dispatch = useDispatch()
    let [isAdded, addToFavorites] = useTougle(false)

    const addToFavorite = () => {
        if (currentUser) {
            const currentUserObject = JSON.parse(localStorage.getItem(currentUser.username));
            currentUserObject.favorites.push(item.char_id)
            localStorage.setItem(currentUser.username, JSON.stringify(currentUserObject));
            addToFavorites(!isAdded)
        }
    }

    const removeFromFavorite = () => {
        if (currentUser) {
            const currentUserObject = JSON.parse(localStorage.getItem(currentUser.username));
            const favorites = currentUserObject.favorites
            const correctedFavorites = favorites.filter(favorite => favorite !== item.char_id)
            currentUserObject.favorites = correctedFavorites
            localStorage.setItem(currentUser.username, JSON.stringify(currentUserObject));
            dispatch(changeFavoritesList())
            addToFavorites(!isAdded)
        }
    }

    let buttonText = 'add to favorites'
    let handler = addToFavorite
    if (isAdded) {
        handler = removeFromFavorite;
        buttonText = 'remove'
    }

    const characterLink = `/show-more/id:${item.char_id}`

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
                            (mainContentPage ? (
                                    <TypicalButton clickHandler={handler}>{buttonText}</TypicalButton>
                                ) : (
                                    <TypicalButton clickHandler={removeFromFavorite}>remove</TypicalButton>
                                ))
                        }
                        <Link to={characterLink} className='link'>
                            <TypicalButton clickHandler={() => dispatch(setCurrentCharacter(item))}>show more</TypicalButton>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

Character.propTypes = {
    item: PropTypes.shape({
        char_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })
}

export default Character
