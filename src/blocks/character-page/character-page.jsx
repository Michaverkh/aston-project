import React from 'react';
import {useSelector} from "react-redux";
import "./character-page.css"
import "../../styles/global-styles.css"

const CharacterPage = () => {

    const character = useSelector(state => state.toolkit.selectedCharacter)

    return (
        <div className="character">
            <div className="character__header">
                <h2>{character.name}</h2>
                <img src={character.img}/>
            </div>
            <ul className="character__params">
                <li>
                    <strong>Actor Name:</strong> {character.portrayed}
                </li>
                <li>
                    <strong>Nickname:</strong> {character.nickname}
                </li>
                <li>
                    <strong>Birthday:</strong> {character.birthday}
                </li>
                <li>
                    <strong>Status:</strong> {character.status}
                </li>
                <li>
                    <strong>Category:</strong> {character.category}
                </li>
            </ul>
        </div>
    );
};

export default CharacterPage;
