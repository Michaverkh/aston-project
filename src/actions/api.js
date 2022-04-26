import axios from "axios";
import {setCharacters, setIsFetching} from "../toolkit-reducers/fetchingSlice";
import {debounce} from "../utils/debounce";


export const getCharacters = (query) => {
    let url = "";
    query ? url = `https://www.breakingbadapi.com/api/characters?name=${query}` : url = "https://www.breakingbadapi.com/api/characters"
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios(url);
        dispatch(setCharacters(response.data))
    }
};

export const getCharactersDebounced = debounce(() => getCharacters);