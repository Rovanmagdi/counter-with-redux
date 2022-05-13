import { createStore } from 'redux';

const initailState = { value: 1,toggle:false };
const counterReducer = (state=initailState, action) => {
    if(action.type==="increase")
    {
        return{...state,value:state.value+action.payload};///...state if there are more state another 
      
    }
    if(action.type==="decrease")
    {
        return {...state,value:state.value-action.payload}
    }
    if(action.type==="toggle")
    {
        console.log("gh");
        return({...state,toggle:!state.toggle})
    }
    return state
}


const store = createStore(counterReducer);
export default store;