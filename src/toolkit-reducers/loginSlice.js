import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'toolkit',
    initialState: {
        isRegistr: false,
        user: null,
        isLogin: false,
    },
    reducers: {
        registrAction(state, payload) {
            state.isRegistr = true
            state.user = payload
        },
        unregistrAction(state, payload) {
            state.isRegistr = false
            state.isLogin = false
            state.user = payload
        },
        loginAction(state, payload) {
            state.isLogin = true
            state.user = payload
        },
    },
})

export default loginSlice.reducer
export const { registrAction, unregistrAction, loginAction } = loginSlice.actions