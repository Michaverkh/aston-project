import axios from "axios";
import {setData} from "../../reducers/apiReducer";

export const getData = () => {
    return async (dispatch) => {
        const response = await axios("https://www.breakingbadapi.com/api/characters");
        dispatch(setData(response.data))
    }
};
