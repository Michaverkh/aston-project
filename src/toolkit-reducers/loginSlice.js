import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'toolkit',
    initialState: {
        user: null,
        isLogin: false,
        isFavoritesChanged: false
    },
    reducers: {
        registrAction(state, action) {
            state.isLogin = true
            state.user = action.payload
        },
        unregistrAction(state, action) {
            state.isLogin = false
            state.user = action.payload
        },
        loginAction(state, action) {
            state.isLogin = true
            state.user = action.payload
        },
        changeFavoritesList(state) {
            state.isFavoritesChanged = !state.isFavoritesChanged
        }
    },
})

export default loginSlice.reducer
export const { registrAction, unregistrAction, loginAction, changeFavoritesList} = loginSlice.actions