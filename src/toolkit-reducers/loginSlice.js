import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'toolkit',
    initialState: {
        user: null,
        isLogin: false,
    },
    reducers: {
        registrAction(state, payload) {
            state.isLogin = true
            state.user = payload
        },
        unregistrAction(state, payload) {
            state.isLogin = false
            state.user = payload
        },
        loginAction(state, action) {
            state.isLogin = true
            state.user = action.payload
        }
    },
})

export default loginSlice.reducer
export const { registrAction, unregistrAction, loginAction} = loginSlice.actions