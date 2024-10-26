// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the user slice
const initialState = {
  fullName: '',
  username: '',
  email: '',
  password:'',
  userType: 'candidate', // Default user type can be 'candidate' or 'employer'
  termsAccepted: false,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState, // Assign the initial state here
  reducers: {
    setUser: (state, action) => {
      // Update user details in the state
      state.fullName = action.payload.fullName;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.userType = action.payload.userType;
      state.termsAccepted = action.payload.termsAccepted;
    },
    clearUser: () => initialState, // Reset user to initial state
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
