import { createSlice, createStore } from '@reduxjs/toolkit';


const initialState = { value: 1 };


const counterReducer = createSlice(
    {
        name: "counter",
        initialState: initialState,
        reducers: {
            increase: (state, action) => {
                state.value = state.value + action.payload;

                console.log("hj");
            },
            decrease:(state,action)=>
            {
                console.log("hj");
                state.value = state.value - action.payload;

            }

        }
    })

const storeToolkit = createStore(counterReducer.reducer);
export const counterAction=counterReducer.actions;
export default storeToolkit;