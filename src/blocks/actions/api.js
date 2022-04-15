import axios from "axios";
import {setData} from "../../reducers/apiReducer";

export const getData = (searchQuery) => {
    return async (dispatch) => {
        const response = axios.get('https://www.breakingbadapi.com/api/characters?name=${searchQuery}')
        dispatch(setData((await response).data))
    }
}