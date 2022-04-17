const SET_DATA = "SET_DATA";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState = {
        items: [],
        isFetching: true
    };

export default function apiReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
}

export const setData = (data) => ({type: SET_DATA, payload: data});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool});