import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count : 0 //if this is changed then that is what will appear in the page initially
}

let counterSlice = createSlice({ //create slice is used to create both actions and reducers at the same time
    name : 'counter', //name of slice
    initialState : initialState, //initial state is 0
    reducers : {
        increment : function (state , action){ //increment is a function that takes the  
            state.count = state.count + 1
        },
        decrement : function (state , action){
            state.count = state.count - 1
        },
        incrementBy : function (state , action){
            state.count = state.count + action.payload //payload is teh data of the action being passed on to tbe added
        },//action.payload is the passed on variable which is 5 in line 24 of counterredux incrementby(5)
        DecrementBy : function (state , action){
            state.count = state.count - action.payload //payload is teh data of the action being passed on to tbe added
        }
    }
});
export const {increment , decrement , incrementBy,DecrementBy} = counterSlice.actions;
export default counterSlice.reducer;
