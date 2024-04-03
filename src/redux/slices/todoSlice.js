//createSlice ({name, iniialState, reducers, extraReducer})

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoData: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoData.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoData = state.todoData.filter(item => item.id !== action.payload);
    }
  },
  // extraReducers:"",
});

export const { addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;