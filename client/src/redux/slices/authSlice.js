// store/accountSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateAccountSettings: (state, action) => {
            const { username, email, password } = action.payload;
            state.username = username;
            state.email = email;
            state.password = password; 
        },
    },
});

export const { updateAccountSettings } = accountSlice.actions;
export default accountSlice.reducer;
