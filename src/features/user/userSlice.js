import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Tigran",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    changeUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { changeUserName } = userSlice.actions;
export const selectUserName = (state) =>
  console.log(state) || state.user.userName;
export default userSlice.reducer;
