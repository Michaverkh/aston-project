import axios from "axios";
import {setCharacters, setIsFetching} from "../toolkit-reducers/fetchingSlice";
// import {setCharacters, setIsFetching} from "../toolkit-reducers/api-reducer-toolkit"

export const getCharacters = (query) => {
    let url = "";
    query ? url = `https://www.breakingbadapi.com/api/characters?name=${query}` : url = "https://www.breakingbadapi.com/api/characters"
    console.log(url)
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios(url);
        dispatch(setCharacters(response.data))
    }
};
