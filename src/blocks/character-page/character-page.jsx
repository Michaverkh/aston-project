import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import "./character-page.css"
import "../../styles/global-styles.css"
import TestContext from "../../context/context";

const CharacterPage = () => {

    const character = useSelector(state => state.toolkit.selectedCharacter)

    // Code which typed below is not functional. Its only demonstration of the ReactContext implementation

    const testdata = useContext(TestContext)
    console.log(testdata)

    // end of test code

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
