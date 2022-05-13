import {  configureStore } from '@reduxjs/toolkit';
import counterReducer from'./CounterSlice';
import toggle from'./ToggleSlice';




const storeToolkit = configureStore({reducer:{counter:counterReducer,toggle:toggle}});
export default storeToolkit;