import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
  },
  reducers: {
    addChat: (state, action) => {
        state.chat.push(action.payload);
        state.chat = state.chat.slice(-13)
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;