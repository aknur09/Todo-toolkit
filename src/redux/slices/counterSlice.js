import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice ({
    name: "counter",
initialState: {

    counterData: 11,
}, 
reducers: { 
    //actions

    plus: (state)=>{
        state.counterData+=1
    } ,

    minus: (state)=>{
        state.counterData-=1
    } ,
    reset: (state)=>{
        state.counterData = 0  
    }
    
}, //sync actions
// extraReducers:"", //async actions
})

export default counterSlice.reducer //initialState
export const { plus, minus, reset } = counterSlice.actions;