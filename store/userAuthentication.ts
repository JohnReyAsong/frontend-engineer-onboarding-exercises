import { createSlice } from '@reduxjs/toolkit';

export interface userAuthentication {
  isLoggedIn: boolean;
}

const initialState: userAuthentication = {
  isLoggedIn: false,
};

export const userAuthenticationSlice = createSlice({
  name: 'userAuthentication',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      localStorage.setItem('token', action.payload);
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = userAuthenticationSlice.actions;

export default userAuthenticationSlice.reducer;
