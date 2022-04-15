const SET_DATA = "SET_DATA"

const defaultState = {
    items: [],
    isFetching: true,
}

export default function apiReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export const setData = (data) => ({type: SET_DATA, payload: data})