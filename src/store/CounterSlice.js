import { createSlice } from "@reduxjs/toolkit";
import { toggleAction } from "./ToggleSlice";

const initialState = { value: 1 };
const { toggleSwitchOff } = toggleAction;

const counterReducer = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.value = state.value + action.payload;
      console.log("increase");
    },
    decrease: (state, action) => {
      console.log("decrease");
      state.value = state.value - action.payload;
    },
    extraReducers: {
      [toggleSwitchOff]: () => {
        //    state.value=0;
        console.log("gh");
      },
    },
  },
});

export default counterReducer.reducer;
export const counterAction = counterReducer.actions;
