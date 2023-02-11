import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    value: {
      friendList: [],
    },
  },
  reducers: {
    update,
  },
});
