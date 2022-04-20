import axios from "axios";
import {setData, setIsFetching} from "../reducers/apiReducer";

export const getData = (query) => {
    let url = "";
    query ? url = `https://www.breakingbadapi.com/api/characters?name=${query}` : url = "https://www.breakingbadapi.com/api/characters"
    console.log(url)
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios(url);
        dispatch(setData(response.data))
    }
};
