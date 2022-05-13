import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: true };

const toggle=createSlice(
    {
         name:"toggle",
         initialState:initialState,
         reducers:{
             toggleSwitchOff:(state)=>
             {
                state.value=false
                console.log("off");
             },
             toggleSwitchOn:(state)=>
             {
                state.value=true
                console.log("on");
             }
         }
    }
)

export default toggle.reducer;
export const toggleAction=toggle.actions;