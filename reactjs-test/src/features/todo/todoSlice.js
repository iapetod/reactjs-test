import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "counter",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.list.push({ label: action.payload, checked: false });
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    removeTask: (state, action) => {
      console.log(state.list.filter((v, i) => i != action.payload));
      state.list = state.list.filter((v, i) => i != action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    updateTask: (state, action) => {
      console.log(action);
      state.list = state.list.map((v, i) => {
        if (i == action.payload.index) {
          return action.payload.data;
        }
        return v;
      });
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    initTask: (state, action) => {
        state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask, updateTask, initTask } = todoSlice.actions;

export default todoSlice.reducer;
