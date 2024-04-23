import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    authData : [],
    isLoggedin : false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const authInfo = {
                id: nanoid(),
                data: action.payload,
            }

            if (authInfo) {
                state.isLoggedin = true,
                state.authData.push(authInfo);
            }
            else{
                state.isLoggedin = false,
                state.authData = []
            }
        },

        logout: (state, action) => {
            const authInfo = {
                id: nanoid(),
                data: action.payload,
            }

            if (authInfo) {
                state.isLoggedin = false,
                state.authData = []
            }
            else{
                state.authData.push(authInfo)
                state.isLoggedin = true
            }
        }
    }
});

